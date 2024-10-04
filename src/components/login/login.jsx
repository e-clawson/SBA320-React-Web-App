import React from "react";
import { useState } from "react";
import "./login.css"

import email_img from "../../assets/email.png"
import password_img from "../../assets/password.png"
import person_img from "../../assets/person.png"

export default function Login({currentUser, setCurrentUser}) {
    const [action, setAction] = useState("Sign Up")
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstName, setFirstName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://dummyjson.com/users?limit=0')
        .then(res => res.json())
        .then((data) => {
            const user = data.users.find(
                (u) => u.email === email && u.password === password
            );
            if (user) {
                console.log("login successful")
                console.log(user)
                setCurrentUser(user)
                //add navigvation to homepage here
            } else {
                setError("Invalid Username or Password")
            }
        }) 
    }

    return (
    <div className="container">
        <div className="header">
        <div className="text">{action}</div>
        </div>
        <div >
            <form className="sign-in-form" onSubmit={handleSubmit}>
            {action === "Log In" ? <div></div> :  <div className="input">
                <img src={person_img} alt=""/>
                <input
                value={firstName}
                name="firstName"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                ></input>
            </div>}
            <div className="input">
                <img src={email_img} alt=""/>
                <input
                value={email}
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div className="input">
                <img src={password_img} alt=""/>
                <input
                value={password}
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
            
            <div className="submit-container">
                <button className={action === "Log In" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}} type="submit">Sign Up</button>
                <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Log In")}}>Log In</button>
           
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
        </form>
        </div> 
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div> }
    </div>
    )
}