import axios from "axios";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {Product} from '../model/Product';
import {useNavigate} from 'react-router-dom';
import ProductView from "./ProductView";
import { useTitle } from "../hooks/useTitle";

const base_url = "http://localhost:9001/products";



function ListProducts() {


    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setIsMessageVisible] = useState(true);
    useTitle("List Products");

    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts(){

        try {    
            const response = await axios.get<Product[]>(base_url);
            console.log("Response", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("Error", error);
        }
    }
    const deleteProduct = useCallback(async (product: Product) =>{

        try {
            const url = base_url + "/" + product.id;
            await axios.delete(url);
            //await fetchProducts();
            //copy of the state(products array)
            const copy_of_products = [...products];
            const index_of_product_to_delete = copy_of_products.findIndex(p => p.id === product.id);
            if(index_of_product_to_delete !== -1){
                //remove the product from the copy of the state
                copy_of_products.splice(index_of_product_to_delete, 1);
                //update the state
                setProducts(copy_of_products);
            }
            
           

            alert(`Product with id ${product.id} deleted..`);

        } catch (error) {
            alert(`Error in deleting product with id ${product.id}..`);
        }
    }, [products])

    const editProduct = useCallback((product: Product)=>{
        
        navigate("/products/" + product.id, {state: {}});

    }, []);


    function toggleMessage(){
        setIsMessageVisible(!isMessageVisible)
    }

    const totalPrices = useMemo( ()=>{
        console.log("Calculating total prices..");
        let total = 0;
        products.forEach(p => {
            if(p.price)
                total += p.price
        });
        return total;
    }, [products])

    return (
        <div>
            <h4>List Products</h4>
            {isMessageVisible ? 
                <div className="alert alert-info">This is message for demonstration</div>: null}
            <button className="btn btn-primary" onClick={toggleMessage}>Toggle Message</button>
            <div className="alert alert-primary">
                Total Value of Products: {totalPrices}
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Desription</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (

                                <ProductView key={product.id} 
                                            product={product} onDelete={deleteProduct} onEdit={editProduct}/>
                                // <tr key={product.id}>
                                //     <td>{product.id}</td>
                                //     <td>{product.name}</td>
                                //     <td>{product.price}</td>
                                //     <td>{product.description}</td>
                                //     <td>
                                //         <button className="btn btn-primary" 
                                //                         onClick={() => {editProduct(product)}}>Edit</button>&nbsp;
                                //         <button className="btn btn-danger" 
                                //                         onClick={() => {deleteProduct(product)}}>Delete</button>
                                //     </td>
                                // </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListProducts;