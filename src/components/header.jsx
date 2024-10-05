import { useContext } from "react"
import  CurrentUserContext from "../user-context"

export default function Header() {
    const user = useContext(CurrentUserContext)
    return (
    <div>
        <h1>Sticky Done</h1>
        <h2>Organize, Track, and Complete Tasks!</h2>
        <h3>Welcome {user && user.firstName ? user.firstName : "" }!</h3>
    </div>
    )
}