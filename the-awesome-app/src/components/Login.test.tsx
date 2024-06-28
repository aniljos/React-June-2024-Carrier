import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../redux/store';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;



test("render Login", () => {

    render(<Provider store={store}> <Router> <Login /> </Router></Provider>);
    const expectedTexts = screen.getAllByText(/Login/i);
    expect(expectedTexts).toHaveLength(2);
})

test("render Login no creds", () => {

    render(<Provider store={store}> <Router> <Login /> </Router></Provider>);
    fireEvent.click(screen.getAllByText(/Login/i)[1]);
    const expectedText = screen.getByText(/Enter the cerdentials../i);
    expect(expectedText).toBeInTheDocument();
})
test("render Login with incorrect creds", async () => {

    mockedAxios.post.mockRejectedValue({response: {data: {}}});

    render(<Provider store={store}> <Router> <Login /> </Router></Provider>);
    let userName = screen.getByPlaceholderText(/Enter the UserName/i);
    let password = screen.getByPlaceholderText(/Enter the Password/i);
    
    fireEvent.change(userName, {target: {value: 'test'}});
    fireEvent.change(password, {target: {value: 'test@123'}});
    expect(userName).toHaveValue('test');
    expect(password).toHaveValue("test@123");

    fireEvent.click(screen.getAllByText(/Login/i)[1]);
    await waitFor(() => {
        const expectedText = screen.getByText(/Invalid cerdentials../i);
        expect(expectedText).toBeInTheDocument();
    })
   
})

test("render Login with correct creds", async () => {

    mockedAxios.post.mockResolvedValueOnce({data: {accessToken: 'test', refreshToken: 'test'}});

    render(<Provider store={store}> <Router> <Login /> </Router></Provider>);
    let userName = screen.getByPlaceholderText(/Enter the UserName/i);
    let password = screen.getByPlaceholderText(/Enter the Password/i);
    
    fireEvent.change(userName, {target: {value: 'test'}});
    fireEvent.change(password, {target: {value: 'test@123'}});
    expect(userName).toHaveValue('test');
    expect(password).toHaveValue("test@123");

    fireEvent.click(screen.getAllByText(/Login/i)[1]);
    await waitFor(() => {
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);

    })
    await waitFor(() => {
        expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:9001/login', {name: "test", password: 'test@123'});
        
    })
   
})
