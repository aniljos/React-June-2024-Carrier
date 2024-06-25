import {useRef, useEffect} from 'react';

function Login(){

    const usernameRef = useRef<HTMLInputElement>(null);

    //usernameRef.current?.focus();

    //useEffect(callback, [list of dependencies])
    //if the dependency list is empty, the callback will be invoked only once on mount
    useEffect(() => {

        console.log("useEffect on mount..");
        usernameRef.current?.focus();

    }, []);


    return (
        <div>
            <h4>Login</h4>

            <form>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input ref={usernameRef} type="text" id="username" placeholder="Enter the UserName"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter the Password"/>
                </div>
                <div>
                    <button type="button">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;