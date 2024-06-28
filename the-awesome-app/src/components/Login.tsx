
import { Input } from "crest-ui-library";
import { useLogin } from "../hooks/useLogin";


function Login(){

    const {userName, password, message, usernameRef, passwordRef, 
                        handleLogin, handleNameChange, handlePwdChange} = useLogin();
    
    return (
        <div>
            <h4>Login</h4>
            {message ? <div style={{color: "red", border: "2px solid red", padding: "2px"}}>{message}</div>: null}
            <form>
                {/* <div className='form-group'>
                    <label htmlFor="username">User Name</label>
                    <input className='form-control' ref={usernameRef} type="text" id="username" 
                            placeholder="Enter the UserName" value={userName} onChange={handleNameChange}/>
                </div> */}
                <Input type="text" label="User Name"  placeholder="Enter the UserName" 
                            value={userName} onChange={handleNameChange} ref={usernameRef}/>
               
                {/* <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input className='form-control' ref={passwordRef} type="password" id="password" 
                            placeholder="Enter the Password" value={password} onChange={handlePwdChange}/>
                </div> */}
                <Input type="password" label="Password"  
                            placeholder="Enter the Password" value={password} onChange={handlePwdChange}/>
                <br/>
                <div>
                    <button className='btn btn-success' type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;