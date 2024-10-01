import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Login from './components/Login/login'
import AddTask from './components/tasks/addTask'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Header />
    < Login />
    < AddTask />
    </>
  )
}

export default App
