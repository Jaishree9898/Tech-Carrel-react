import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  const obj = {
    name: "Jaishree",
    address: {
      city: "Gwalior",
      state:"MP",
    },
  }
  
  const newArr=[1,2,3,4]

  const URL = "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=400";
  return (
    <>
      <button className='bg-sky-500 hover:bg-sky-700 hover:scale-[1.5] rounded-md p-2 transition-all m-5 
 '>React with Tailwind</button>
      <Card name="Jaishree" URL={URL} myArr={newArr} obj={ obj} />
      <Card name="Shubham" URL={URL} />
      <Card name="kashish"  URL={URL}/>
      <Card URL={URL} />
            
    </>
  )
}

export default App
