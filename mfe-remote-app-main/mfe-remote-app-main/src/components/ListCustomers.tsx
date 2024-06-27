import axios from "axios";
import { useEffect, useState } from "react";
import { Customer } from "../model/Customer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const baseUrl = "http://localhost:9001/customers";
function ListCustomers(){

    const [customer, setCustomer] = useState<Customer[]>([]);

    const navigate = useNavigate();
    const auth = useSelector((state:RootState) => state.auth);

    useEffect(() => {
        fetchCustomers();

    }, []);

    async function fetchCustomers(){ 

        try {
            
            
            const response = await axios.get(baseUrl);
            setCustomer(response.data);

        } catch (error) {
            console.log("fetchCustomers" + error);
        }

     }

     async function remove(customer:Customer){
         try {
             await axios.delete(baseUrl + "/" + customer.id);
             fetchCustomers();
             alert(`Customer ${customer.name} removed ` )
         } catch (error) {
             console.log("remove" + error);
         }
     }

     function edit(customer:Customer){
         navigate(`/edit-customer`, {state: {customer}} );
     }


    return (
        <div>
            <h4>Customers</h4>

            <h5>Welcome {auth.userName}</h5>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.location}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => remove(customer)}>Delete</button>&nbsp;
                                    <button className="btn btn-primary" onClick={() => edit(customer)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>

    )
}

export default ListCustomers;