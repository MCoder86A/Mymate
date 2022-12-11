import { useState } from 'react';
import { apiAuthRouter } from '../../util/api/router';
import './login.css'



const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async()=>{
        const result = await apiAuthRouter().login(username,password)
        
        const jsonData = await result.json()
        const x_access_token = jsonData["x-access-token"]
        if(!x_access_token){
            console.log(jsonData)
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