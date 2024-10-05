import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../user-context";

export default function Signout() {
    const [user, setUser] = useContext(CurrentUserContext)

    const signout = () => {
        setUser(null)
    }

    return(
        <>
        {user !== null ? (
            <button onClick={signout}>Sign Out</button>
        ) : ''}
        </>
        
    )
}