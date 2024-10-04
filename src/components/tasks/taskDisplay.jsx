import './taskDisplay.css'
export default function TaskDisplay({ todos }) {
  console.log(todos)
     return (
        <>
        
       <div className="task-container">
       <h3>To Dos:</h3>
       <div className="task-display">
        {todos.map((todo) => (
            <div className = "task-card">
                <div key={todo.id}>
                    <p>{todo.todo}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            ),
        )}
        </div>
       </div>
       </>
     );
 }