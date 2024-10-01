import React from "react";
import { useState } from "react";

export default function login() {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
    <div>
        <h4>Log-In:</h4>
        <div classname="signinForm">
            <input
            value={email}
            placeholder="enter your email"
            className={'inputBox'}
            >
            </input>
            <br></br>
            <input
            value={password}
            placeholder="password"
            className={'inputBox'}
            >
            </input>
            <br></br>
            <input
            type="button"
            value={'Log In'}
            className={'loginButton'}
            >
            </input>

        </div>
        
    </div>
    )
}