import { useState } from 'react'
import './App.css'


function App() {
  const [counter,setCounter]=useState(0)

    const addValue=()=>{
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
     
    console.log(counter);
  }

  const removeValue = () => {
    setCounter((prevCount)=>prevCount-1);
     
  console.log(counter);
  }

  return (
    <>
      <h1>React Course { counter}</h1>
      <h2>Counter Value : { counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer { counter}</p>
    </>
)
}

export default App;
