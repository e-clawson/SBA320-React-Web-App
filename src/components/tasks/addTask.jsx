import { useState, useEffect } from "react";

export default function AddTask({todos, setTodos}) {
    
    const [newTodo, setNewTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");
    const [editId, setEditId] = useState(null);
  
    const getToDos = async(todos) =>{
      try {
        const response = await fetch(
          `https://dummyjson.com/todos/user/1`
        );
        const data = await response.json();
        console.log(data)
        setTodos({data});
        console.log(todos);
      } catch(e) {
        console.error(e)
      }
  }
    useEffect(() => {
      getToDos(setTodos({todos}));
    }, []);
    
    const handleInputChange = (event) => {
      setNewTodo(event.target.value);
    };
  
    const addTodo = () => {
      if (newTodo.trim() !== "") {
        setTodos([...todos, { id: Date.now(), todo: newTodo, completed: false }]);
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
  
    const handleEditClick = (id, text) => {
      setIsEditing(true);
      setEditId(id);
      setEditText(text);
    };
  
    const handleEditSubmit = (id) => {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
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
      <div className="tasks">
        <input
          type="text"
          placeholder="Add a Task!"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add</button>
  
        <h3>Tasks: </h3>
        {todos.map((todo, index) => (
          <div className="toDoBox">
            <div key={todo.id}>
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
                <div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                  {todo}
                  <button onClick={() => handleEditClick(todo.id, todo)}>
                    Edit
                  </button>
                </div>
              )}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
