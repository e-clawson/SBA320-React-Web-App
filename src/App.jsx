import {useEffect, useState, createContext, useContext } from 'react'
// import { Route, Routes, Link } from 'react-router-dom'
import CurrentUserContext from "./user-context.jsx"
import './App.css'
import Header from './components/header'
import Login from "./components/login/Login.jsx"
import TaskDisplay from './components/tasks/taskDisplay'
import TaskCounter from './components/tasks/TaskCounter.jsx'



function App() {
  const [currentUser, setCurrentUser] = useState([null])
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState()
  
  console.log(currentUser)
  console.log(currentUser.id)

  const userId = currentUser.id
  console.log(userId)

  const getToDos = async() =>{
    console.log(currentUser)
    try {
      const response = await fetch(
        `https://dummyjson.com/todo/user/${currentUser.id}`
      );
      const data = await response.json();
      console.log(data)
      const todoData = data.todos
      console.log(todoData)
      setTodos(todoData); 
    } catch(e) {
      console.error(e)
    }
}

  useEffect(() => {
    getToDos(currentUser);
    console.log(todos)
  }, []);

   return (
    <>
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
    <Header />
    <Login />
    <TaskCounter />
    {/* <TaskDisplay todos={todos} setTodos={setTodos}/> */}
    </CurrentUserContext.Provider>
    </>
  )
}

export default App
