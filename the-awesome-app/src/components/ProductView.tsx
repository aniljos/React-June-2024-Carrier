import React from "react";
import { Product } from "../model/Product";

type ProductViewProps = {
    product: Product;
    onDelete?: (product: Product) => void;
    onEdit?: (product: Product) => void;
}

//React.memo is a higher order component that will prevent the component from re-rendering 
                                                //if the props or state have not changed
//React.memo will compare the current props with the next props
//Introduced in React 16.3, meant for optimization
const ProductView: React.FC<ProductViewProps> = React.memo(({ product, onDelete, onEdit }) => {

    console.log("rendering product view..", product.id);

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
                <button className="btn btn-primary" onClick={() => onEdit!(product)}>Edit</button>&nbsp;
                <button className="btn btn-danger" onClick={() => onDelete!(product)}>Delete</button>
            </td>
        </tr>
    )
})

export default ProductView;