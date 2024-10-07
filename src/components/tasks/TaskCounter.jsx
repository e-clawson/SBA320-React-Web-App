import { useContext } from "react"
import  CurrentUserContext from "../user-context"

export default function TaskCounter({}) {
    const user = useContext(CurrentUserContext)

    

    return (
        <div className='task-counter'>
            <h2>Total Tasks Completed: </h2>
        </div>
    )
}