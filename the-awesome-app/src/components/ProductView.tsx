import { Product } from "../model/Product";

type ProductViewProps = {
    product: Product;
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {

    console.log("rendering product view..", product.id);

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
        </tr>
    )
}

export default ProductView;