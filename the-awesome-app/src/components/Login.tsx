import {useRef, useEffect, useState, ChangeEvent} from 'react';
import axios from 'axios';

function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    //usernameRef.current?.focus();

    //useEffect(callback, [list of dependencies])
    //if the dependency list is empty, the callback will be invoked only once on mount
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
                const response = await axios.post("http://localhost:9001/login", { name: userName, password: password})
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
    return (
        <div>
            <h4>Login</h4>
            {message ? <div style={{color: "red", border: "2px solid red", padding: "2px"}}>{message}</div>: null}
            <form>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input ref={usernameRef} type="text" id="username" 
                            placeholder="Enter the UserName" value={userName} onChange={handleNameChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input ref={passwordRef} type="password" id="password" 
                            placeholder="Enter the Password" value={password} onChange={handlePwdChange}/>
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;