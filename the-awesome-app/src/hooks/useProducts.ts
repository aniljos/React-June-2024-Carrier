import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import axios from "axios";

const base_url = "http://localhost:9001/secure_products";

export function useProducts(){

    const [products, setProducts] = useState<Product[]>([]);  
    const abortController = new AbortController();;  

    useEffect(() => {
        fetchProducts();
        return ()=> {
            abortController.abort();
        }
    }, [])

    async function fetchProducts(){

        try {    
            const response = await axios.get<Product[]>(base_url, {signal: abortController.signal});
            console.log("Response", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("Error", error);
        }
    }

    return {products, setProducts};
}

