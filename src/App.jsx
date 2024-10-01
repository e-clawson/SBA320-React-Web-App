import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Login from './components/Login/login'
import AddTask from './components/tasks/addTask'



function App() {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  return (
    <>
    < Header />
    < Login email={email} password={password}/>
    < AddTask />
    </>
  )
}

export default App
