import {useRef, useEffect, useState, ChangeEvent} from 'react';
import axios from 'axios';
import { useTitle } from '../hooks/useTitle';
import {useDispatch} from 'react-redux';
import { AppDispatch } from '../redux/store';
import { createLoginAction, createLogoutAction } from '../redux/authReducer';
import { useNavigate } from 'react-router-dom';
import { InputRefProps } from 'crest-ui-library';




export function useLogin(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    //const usernameRef = useRef<HTMLInputElement>(null);
    // const usernameRef = useRef<HTMLInputElement>(null);
    // const passwordRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<InputRefProps>(null);
    const passwordRef = useRef<InputRefProps>(null);
    useTitle("Login");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {

        console.log("useEffect on login mount..");
        usernameRef.current?.focus();
       
        //invoked on unmouting the component
        return () => {
            console.log("useEffect on login ummount..");
           
        }

    }, []);

    async function handleLogin(){

        debugger;
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
                // dispatch({type:"login", payload: 
                //                             {isAuthenticated: true, 
                //                                 userName: userName, 
                //                                 accessToken: response.data.accessToken, 
                //                                 refreshToken: response.data.refreshToken}})    
                dispatch(createLoginAction({isAuthenticated: true,
                                                userName: userName,
                                                accessToken: response.data.accessToken, 
                                                refreshToken: response.data.refreshToken}));
                navigate("/products");

            } catch (error) {
                console.log("Error", error);
                setMessage("Invalid cerdentials..");
                //dispatch({type: "Logout"});
                dispatch(createLogoutAction())
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