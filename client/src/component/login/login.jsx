import { useState } from 'react';
import {API_BASE_URL} from '../../config/env'
import './login.css'



const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };

        const result = await fetch(`${API_BASE_URL}/login`, requestOptions)
        const data = await result.text()
        
        const jsonData = JSON.parse(data)
        const x_access_token = jsonData["x-access-token"]
        if(!x_access_token){
            console.log(data)
        }
        localStorage.setItem('x-access-token', x_access_token)

    }
    
    return(
        <>
            <div id="loginForm">
                <div className="input">
                    <input type={"email"} placeholder="Email"
                    onChange={(ev)=>{setUsername(ev.target.value)}} />
                </div>
                <div className="input">
                    <input type={"password"} placeholder="Password"
                    onChange={(ev)=>{setPassword(ev.target.value)}} />
                </div>
                <div className="input">
                    <input type={"submit"} onClick={login} />
                </div>
            </div>
        </>
    )
    
}


export default Login