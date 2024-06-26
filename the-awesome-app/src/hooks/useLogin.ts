import {useRef, useEffect, useState, ChangeEvent} from 'react';
import axios from 'axios';
import { useTitle } from '../hooks/useTitle';

export function useLogin(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    useTitle("Login");

    useEffect(() => {

        console.log("useEffect on login mount..");
        usernameRef.current?.focus();
       
        //invoked on unmouting the component
        return () => {
            console.log("useEffect on login ummount..");
           
        }

    }, []);

    async function handleLogin(){

        if(userName && password){
            console.log("User Name", userName, usernameRef.current?.value);
            console.log("Password", password, passwordRef.current?.value);
            //TODO: Call the login API
            // axios
            //     .post("http://localhost:9001/login", { name: userName, password: password})
            //     //.then(successCallback, errorCallback)
            //     .then((response) => {
            //         console.log("Response", response);
            //     }, (error)=> {
            //         console.log("Error", error);
            //         setMessage("Invalid cerdentials..");
            //     })

            try {
                const response = await axios.post("http://localhost:9001/login", 
                        { name: userName, password: password})
                console.log("Response", response);
            } catch (error) {
                console.log("Error", error);
                setMessage("Invalid cerdentials..");
            }
        }
        else{
            setMessage("Enter the cerdentials..");
        }
        
    }
    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        setUserName(evt.target.value);
    }
    function handlePwdChange(evt: ChangeEvent<HTMLInputElement>) {
        setPassword(evt.target.value);
    }


    return {userName, password, message, usernameRef, passwordRef, 
                                handleLogin, handleNameChange, handlePwdChange}
}