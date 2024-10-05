import { useState } from 'react';
import './taskDisplay.css'

export default function TaskDisplay({todos, setTodos}) {
    const [newTodo, setNewTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");
    const [editId, setEditId] = useState(null);

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
      };
    
      const addTodo = () => {
        if (newTodo.trim() !== "") {
          setTodos([...todos, { id: Date.now(), todo: newTodo, completed: false }]);
          setNewTodo("");
          console.log(newTodo)
          console.log(todos)
          //right now it is displaying the new todo on the page but it isnt adding it to todos
        }
      };
    
      const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
      //need to figure out how to update this to change the item to complete, and to turn the view off
      //reach goal and add it to the counter 

      const handleEditClick = (id, text) => {
        setIsEditing(true);
        setEditId(id);
        setEditText(text);
      };
    
      const handleEditSubmit = (id) => {
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
        );
        setIsEditing(false);
        setEditId(null);
        setEditText("");
      };

      const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    
     return (
        <>
        <div className="add-task">
            <input className='task-input'
            type="text"
            placeholder="Add a Task!"
            value={newTodo}
            onChange={handleInputChange}
            />
            <button onClick={addTodo}>Add</button>
        </div>
       <div className="task-container">
       <h2>To Dos:</h2>
       <div key="todos" className="task-display">
        {todos.map((todo, index) => (
            <div key={todo.id} className="task-card">
                {isEditing && editId === todo.id ? (
                <form onSubmit={() => handleEditSubmit(todo.id)}>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button type="submit">Update</button>
                </form>
                ) : (
                <>
                <p>{todo.todo}</p>
                <button onClick={() => handleEditClick(todo.id, todo.text)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button>Complete!</button>
                </>
                )}
            </div>
        ))}
        </div>
       </div>
       </>
     );
 }