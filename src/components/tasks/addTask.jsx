import { useState } from "react";

export default function addTask() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
  
    const handleInputChange = (event) => {
      setNewTodo(event.target.value);
    };
  
    const addTodo = () => {
      if (newTodo.trim() !== "") {
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
        setNewTodo("");
      }
    };
  
    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    return (
      <>
        <input
          type="text"
          placeholder="Add a Task!"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add</button>
  
        <h3>Tasks: </h3>
        {todos.map((todo) => (
          <p key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.text}
            <button>Edit</button>
            <button>Delete</button>
          </p>
        ))}
      </>
    );
}
