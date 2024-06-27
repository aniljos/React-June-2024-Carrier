import { ChangeEvent, useEffect, useState, MouseEvent } from 'react';
import {useNavigate, useParams, useLocation} from 'react-router-dom';
import { Product } from '../model/Product';
import axios from 'axios';
import { Customer } from '../model/Customer';

function EditCustomer(){

    const [customer, setCustomer] = useState<Customer>(new Customer(0, "", ""));    
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        console.log("location", location.state)
        if(location.state){
            setCustomer(location.state.customer);
        }
        

    }, [])

    

   function handleChange(evt: ChangeEvent<HTMLInputElement>){
        const value = evt.target.value;
        const name = evt.target.name;
        setCustomer({...customer, [name]: value});
   }

    async function save(evt: MouseEvent<HTMLButtonElement>){

        evt.preventDefault();
        try {
            const url =  `http://localhost:9001/customers`;
            await axios.put(url, customer);
            navigate("/customers");

        } catch (error) {
            alert("error in saving the customer")
        }      
    }

    function cancel(){
        navigate("/customers");
    }
    return(
        <div>
            <h4> Edit Customer {customer.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" name="name" value={customer.name} 
                                                            onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input className="form-control" id="location" name="location" value={customer.location} 
                                                                    onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary' onClick={save}>Save</button>&nbsp;
                    <button type='button' className='btn btn-info' onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )

}
export default EditCustomer;