import React from "react";
import { useContext } from "react";
import CurrentUserContext from "../../user-context";

export default function Signout() {
    const {currentUser, setCurrentUser } = useContext(CurrentUserContext)

    const signout = () => {
        setCurrentUser(null)
    }

    return(
        <>
        <button onClick={signout}>Sign Out</button>
        </>
        
    )
}