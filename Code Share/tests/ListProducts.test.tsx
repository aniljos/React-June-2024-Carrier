import ListProducts from "../components/ListProducts"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import {store} from "../redux/store" 
import { useTitle } from "../hooks/useTitle"
import axios from "axios"
import { useProducts } from "../hooks/useProducts"
import { Product } from "../model/Product"

jest.mock('axios');
jest.mock('../hooks/useProducts');
// jest.mock('../hooks/useTitle', () => {
//     return {
//         useTitle: jest.fn()
//     }
// });

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUseProduct = useProducts as jest.MockedFunction<typeof useProducts>;
const products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
  ];
beforeEach(() => {
    
    
      mockedUseProduct.mockReturnValue({
        products, setProducts: jest.fn()
      })
});


test("ListProducts component", () => {

    render(<Provider store={store}><Router><ListProducts/></Router></Provider>)
    const listProductsElement = screen.getByText(/List Products/i)
    expect(listProductsElement).toBeInTheDocument()
    expect(mockedUseProduct).toHaveBeenCalled()
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
})

test("cacculate total price", () => {

    render(<Provider store={store}><Router><ListProducts/></Router></Provider>)
    expect(screen.getByText(/Total Value of Products: 300/i)).toBeInTheDocument();
})

test("delete", async () => {

    const setProductsMock = jest.fn();
    mockedUseProduct.mockReturnValue({
      products,
      setProducts: setProductsMock,
    });
    mockedAxios.delete.mockResolvedValueOnce({});

    render(<Provider store={store}><Router><ListProducts/></Router></Provider>);
    const deletebtn = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(deletebtn);

    await waitFor(() => {expect(mockedAxios.delete).toHaveBeenCalled();});
    //expect(screen.getByText(/Total Value of Products: 200/i)).toBeInTheDocument();
    //expect(setProductsMock).toHaveBeenCalled();
    await waitFor(() => {
        // expect(setProductsMock).toHaveBeenCalledWith([
        //   { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
        // ]);
        expect(setProductsMock).toHaveBeenCalled();
        
      });
    //   await waitFor(() => {
    //     expect(screen.getByText(/Total Value of Products: 200/i)).toBeInTheDocument();
    //   })
    mockedUseProduct.mockReturnValue({
        products : products.filter(p => p.id !== 1),
        setProducts: setProductsMock,
      });
      render(<Provider store={store}><Router><ListProducts/></Router></Provider>);
      expect(screen.getByText(/Total Value of Products: 200/i)).toBeInTheDocument();

})

test('toggles the message visibility', () => {
    render(
      <Provider store={store}>
        <Router>
          <ListProducts />
        </Router>
      </Provider>
    );

    const toggleButton = screen.getByText('Toggle Message');
    fireEvent.click(toggleButton);

    expect(screen.queryByText('This is message for demonstration')).not.toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.getByText('This is message for demonstration')).toBeInTheDocument();
  });