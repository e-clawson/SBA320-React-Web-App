import {useEffect, useState } from 'react'
// import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Login from "./components/login/Login.jsx"
import TaskDisplay from './components/tasks/taskDisplay'


function App() {
  // const [userAuth, setUserAuth] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [todos, setTodos] = useState([]);

  const getToDos = async() =>{
    try {
      const response = await fetch(
        `https://dummyjson.com/todos/user/1`
      );
      const data = await response.json();
      const todoData = data.todos
      console.log(todoData)
      setTodos(todoData); 
    } catch(e) {
      console.error(e)
    }
}
  useEffect(() => {
    getToDos();
    console.log(todos)
  }, []);


   return (
    <>
    <Header />
    <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <TaskDisplay todos={todos} setTodos={setTodos}/>
    </>
  )
  
  // return (
    
  //   <>
  //   < Header />
  //   <Routes>
  //     <Route path="/" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
  //     <Route path="/home" element={<AddTask todos={todos} setTodos={setTodos}/>}/>
  //   </Routes>
  //   </>
  // )
}

export default App
