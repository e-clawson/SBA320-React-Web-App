import React from "react";
import { useState } from "react";

export default function login() {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    //need to add some fuctions here to do the following: 
    //1 - check that the email and password are in the correct format 
    //2 - check if a user exists based on the input for email and password 
    //AND that the password is correct for that user 
    //3- login the user 

    return (
    <div>
        <h4>Log-In:</h4>
        <div classname="signinForm">
            <input
            value={email}
            placeholder="enter your email"
            >
            </input>
            <br></br>
            <input
            value={password}
            placeholder="password"
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