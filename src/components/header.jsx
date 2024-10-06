import { useContext } from "react"
import  CurrentUserContext from "../user-context"

export default function Header() {
    const user = useContext(CurrentUserContext)
    console.log(user)
    return (
    <div>
        <h1>Sticky Done</h1>
        <h2>Organize, Track, and Complete Tasks!</h2>
        {user && user.currentUser.firstName ? <h3>Welcome, {user.currentUser.firstName}!</h3> : "" }
    </div>
    )
}