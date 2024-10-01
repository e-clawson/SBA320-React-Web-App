import { useState } from "react";

export default function addTask() {
    const [task, setTask] = useState('')
return (
    <div>
        <input
        input={task}
        placeholder="Add a Task"
        ></input>
        <input
        type="button"
        value={'Add Task'}
        >
        </input>
    </div>

)
   
}
