import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Login from './components/Login/login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Header />
    < Login />
    </>
  )
}

export default App
