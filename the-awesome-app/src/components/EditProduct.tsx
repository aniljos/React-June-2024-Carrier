import {useParams, useNavigate, useLocation} from 'react-router-dom';

function EditProduct(){

    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    //location.state

    function save(){

        //Todo: save the product

        navigate("/products");
    }
    function cancel(){

        navigate("/products");
    }

    return (

        <div>
            <h4>Edit Product</h4>
            <p>Editing product with id: {params.id}</p>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input id="desc" type="text" className="form-control" />
                </div>

                <div>
                    <button type="button" className="btn btn-primary" onClick={save}>Save</button>
                    <button type="button" className="btn btn-secondary" onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;