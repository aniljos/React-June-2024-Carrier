import { useEffect, useRef, useState } from "react";
import { Product } from "../model/Product";
import axios from "axios";
import {useSelector} from 'react-redux';
import { RootState } from "../redux/store";

const base_url = "http://localhost:9001/secure_products";

export function useProducts(){

    const [products, setProducts] = useState<Product[]>([]);  
    const abortController = useRef(new AbortController());
    const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        fetchProducts();
        return ()=> {
            abortController.current.abort();
        }
    }, [])

    async function fetchProducts(){

        try {    
            
            if(auth){
                const headers = {Authorization: `Bearer ${auth.accessToken}`};
                const response = await axios.get<Product[]>(base_url, { headers});
                console.log("Response", response.data);
                setProducts(response.data);
            }
           
            

        } catch (error) {
            console.log("Error", error);
        }
    }

    return {products, setProducts};
}

