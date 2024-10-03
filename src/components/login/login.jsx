import React from "react";
import { useState } from "react";
import "./login.css"

import email_img from "../../assets/email.png"
import password_img from "../../assets/password.png"
import person_img from "../../assets/person.png"

export default function login({name, email, password}) {

    //need to add some fuctions here to do the following: 
    //1 - check that the email and password are in the correct format 
    //2 - check if a user exists based on the input for email and password 
    //AND that the password is correct for that user 
    //3- login the user 

    return (
    <div className="container">
        <div className="header">
        <div className="text">Log-In</div>
        </div>
        <div className="signinForm">
            <div className="input">
                <img src={person_img} alt=""/>
                <input
                value={name}
                placeholder="First Name"
                ></input>
            </div>
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
            <div className="submit">Sign Up</div>
            <div className="submit">Log In</div>
            <div className="forgotPassword">Forgot Password? <span>Click Here</span></div>
            <input
            type="button"
            value={'Log In'}
            className={'loginButton'}
            >
            </input>
            <input
            type="button"
            value={'Sign Up'}
            className={'signUpButton'}
            >
            </input>
        </div>
        </div>
        
    </div>
    )
}