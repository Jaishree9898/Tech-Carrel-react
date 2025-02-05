import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Contexts/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
    <h1>React Context API</h1>
    <Login />
    <Profile />

  
  </UserContextProvider>)
}

export default App
