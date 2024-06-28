import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "../components/Login"
import { Provider } from "react-redux"
//import { store } from "../redux/store"
import { BrowserRouter as Router } from "react-router-dom"
import axios from "axios"
import { resolve } from "path"
import { access } from "fs"
import { createLoginAction } from "../redux/authReducer"
import configureStore from "redux-mock-store"

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

let store: any;

beforeEach(() => {

    store = configureStore();
    store.dispatch = jest.fn();
    store.getState = jest.fn();
    store.subscribe = jest.fn();
})

test("Login", () => {

    render(<Provider store={store}> <Router><Login/></Router></Provider>)
    expect(screen.getAllByText(/Login/).length).toBe(2)
})

test("Login focus", () => {

    render(<Provider store={store}> <Router><Login/></Router></Provider>)
    const usenameText  = screen.getByPlaceholderText(/Enter the UserName/i);
    expect(usenameText).toHaveFocus();
})

test("Login inputs", () => {

    render(<Provider store={store}> <Router><Login/></Router></Provider>)
    const usenameText  = screen.getByPlaceholderText(/Enter the UserName/i);
    const passwordText  = screen.getByPlaceholderText(/Enter the Password/i);
    
    fireEvent.change(usenameText, {target: {value: 'test'}});
    fireEvent.change(passwordText, {target: {value: 'test123'}});

    expect(usenameText).toHaveValue('test');
    expect(passwordText).toHaveValue('test123');
})

test("Login click invalid", () => {

    render(<Provider store={store}> <Router><Login/></Router></Provider>)
    // const usenameText  = screen.getByPlaceholderText(/Enter the UserName/i);
    // const passwordText  = screen.getByPlaceholderText(/Enter the Password/i);

    const loginBtn = screen.getAllByText(/Login/i)[1];
    
    fireEvent.click(loginBtn);
    expect(screen.getByText(/Enter the cerdentials../i)).toBeInTheDocument();
})

test("Login click failure", async () => {


    mockedAxios.post.mockImplementationOnce(() => Promise.reject({}));

    render(<Provider store={store}> <Router><Login/></Router></Provider>)
    const usenameText  = screen.getByPlaceholderText(/Enter the UserName/i);
    const passwordText  = screen.getByPlaceholderText(/Enter the Password/i);

    const loginBtn = screen.getAllByText(/Login/i)[1];

    fireEvent.change(usenameText, {target: {value: 'test'}});
    fireEvent.change(passwordText, {target: {value: 'test123'}});
    
    fireEvent.click(loginBtn);

    await waitFor(() => {
        expect(screen.getByText(/Invalid cerdentials../i)).toBeInTheDocument();
    }) 
})

test("Login click success", async () => {


    //mockedAxios.post.mockImplementationOnce(() => Promise.resolve({access_token: 'test', refreshToken: 'test'}));
    mockedAxios.post.mockResolvedValueOnce({data: {accessToken: 'test', refreshToken: 'test'}});

    render(<Provider store={store}> <Router><Login/></Router></Provider>)
    const usenameText  = screen.getByPlaceholderText(/Enter the UserName/i);
    const passwordText  = screen.getByPlaceholderText(/Enter the Password/i);

    const loginBtn = screen.getAllByText(/Login/i)[1];

    fireEvent.change(usenameText, {target: {value: 'test'}});
    fireEvent.change(passwordText, {target: {value: 'test123'}});
    
    fireEvent.click(loginBtn);

    await waitFor(() => {
        expect(axios.post).toHaveBeenCalled();
        
    }) 
    await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith("http://localhost:9001/login", { name: 'test', password: 'test123'});
    })
    await waitFor(() => {
        expect(store.dispatch).toHaveBeenCalledWith(createLoginAction({isAuthenticated: true, userName: 'test', accessToken: 'test', refreshToken:'test'}));
    })
})



