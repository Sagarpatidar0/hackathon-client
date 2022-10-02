import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const redirect = ()=>{
        navigate('/ngo')
    }
  return (
    <div>
            <div class="NGOloginContainer">
        <div class="NGOloginMid">
            <div class="NGOloginHeading">
                <h1>
                    NGO login
                </h1>
            </div>
            <div class="NGOlogin">
                <input type="email" placeholder = "Email"/>
                <input type="password" placeholder="Password"/>
                <button onClick={redirect}> LOGIN</button>
            </div>
            <div class="NGOloginRd">
                <p>Not registered yet ? <Link to={"/registration"}> Register yourself</Link></p>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login