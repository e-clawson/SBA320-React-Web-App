import {useEffect, useState } from 'react'
// import { Route, Routes, Link } from 'react-router-dom'
import CurrentUserContext from "./user-context.jsx"
import './App.css'
import Header from './components/header'
import Login from './components/login/Login.jsx'
import TaskDisplay from './components/tasks/taskDisplay'
import TaskCounter from './components/tasks/TaskCounter.jsx'
import Signout from "./components/login/signout.jsx"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [todos, setTodos] = useState([]);

  const getToDos = async() =>{
    // console.log(currentUser)
    try {
      const response = await fetch(
        `https://dummyjson.com/todo/user/${currentUser.id}`
      );
      const data = await response.json();
      console.log(data.todos)
      const todoData = data.todos
      // console.log(todoData)
      setTodos(todoData); 
      console.log(todos)
    } catch(e) {
      console.error(e)
    }
}

  useEffect(() => {
    getToDos(currentUser);
    console.log(todos)
  }, [currentUser]);

   return (
    <>
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
    <Header />
    <>
    {currentUser !== null ? (
      <>
      <TaskCounter />
      <TaskDisplay todos={todos} setTodos={setTodos}/>
      {/* <Signout /> */}
      </>
    ) : <Login />}
    </>
    </CurrentUserContext.Provider>
    </>
  )
}

export default App
