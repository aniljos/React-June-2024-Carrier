import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import { Product } from '../model/Product';

function EditProduct(){

    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(new Product(0, "", 0, ""));

    useEffect(() => {

        fetchProduct()

    }, [])

    async function fetchProduct(){

        try {
            const response = await axios.get<Product>("http://localhost:9001/products/" + params.id);
            setProduct(response.data);

        } catch (error) {
            alert("Error in fetching product..")
        }
    }

    async function save(){

        //Todo: save the product
        try {
            
            await axios.put("http://localhost:9001/products/" + params.id, product);
            alert("Product saved..");
            navigate("/products");


        } catch (error) {
            alert("Error in saving product..")
        }

        
    }
    function cancel(){

        navigate("/products");
    }

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){

        // const copy_of_product = {...product};
        // copy_of_product.name = evt.target.value;
        // setProduct(copy_of_product);
        setProduct({...product, name: evt.target.value});
    }

    return (

        <div>
            <h4>Edit Product</h4>
            <p>Editing product with id: {params.id}</p>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" className="form-control" value={product.name} onChange={handleNameChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" className="form-control" 
                                value={product.price} 
                                onChange={(evt) => {setProduct({...product, price: Number(evt.target.value)})}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input id="desc" type="text" className="form-control" 
                                value={product.description}
                                onChange={evt => setProduct({...product, description: evt.target.value})} />
                </div>
                <br/>
                <div>
                    <button type="button" className="btn btn-primary" onClick={save}>Save</button>
                    <button type="button" className="btn btn-secondary" onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;