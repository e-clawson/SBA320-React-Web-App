import React from "react";
import { useState } from "react";
import "./login.css"

import email_img from "../../assets/email.png"
import password_img from "../../assets/password.png"
import person_img from "../../assets/person.png"

export default function login({name, email, password}) {
    const [action, setAction] = useState("Sign Up")

    return (
    <div className="container">
        <div className="header">
        <div className="text">{action}</div>
        </div>
        <div className="sign-in-form">
            {action === "Log In" ? <div></div> :  <div className="input">
                <img src={person_img} alt=""/>
                <input
                value={name}
                placeholder="First Name"
                ></input>
            </div>}
            <div className="input">
                <img src={email_img} alt=""/>
                <input
                value={email}
                placeholder="Email Address"
                ></input>
            </div>
            <div className="input">
                <img src={password_img} alt=""/>
                <input
                value={password}
                placeholder="Password"
                ></input>
            </div>
        <div className="submit-container">
            <div className={action === "Log In" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Log In")}}>Log In</div>
            {/* <input
            type="button"
            value={'Log In'}
            className={'loginButton'}
            > */}
            {/* </input>
            <input
            type="button"
            value={'Sign Up'}
            className={'signUpButton'}
            >
            </input> */}
        </div>
        </div> 
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div> }
    </div>
    )
}