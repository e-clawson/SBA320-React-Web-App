import React from "react";
import { useContext } from "react";
import CurrentUserContext from "../../user-context";

export default function Signout() {
    const [user, setUser] = useContext(CurrentUserContext);

    const signout = () => {
        setUser(null)
    }

    return(
        <>
        <button onClick={signout}>Sign Out</button>
        </>
        
    )
}