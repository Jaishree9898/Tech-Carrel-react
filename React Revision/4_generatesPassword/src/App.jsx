import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'
import { use } from 'react';


function App() {


  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(true);
  const [characters, setCharacters] = useState(true);
  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += '0123456789';
    if (characters) str += '!@#$%^&*()+_';

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass) 
    console.log(pass)
  }, [length, numbers, characters]);

  useEffect(() => {
    generatePassword();
  }, [length, numbers, characters]);

  function copyPassword() {
    window.navigator.clipboard.writeText(password)
    passRef.current.select();
  }


  return (
    <>
    <div className='w-130 h-55 bg-gray-100 rounded-2xl p-5 place-self-center shadow-red-100' >
        <div>
          <h1 className='text-2xl place-self-center m-3'>Password Generator</h1>
          <div className='mb-5 place-self-center'><input type="text" value={password} ref={passRef} className='border rounded-md border-indigo-200  w-70'/> <button className='bg-blue-200 px-4 py-0.5 rounded-2xl hover:bg-blue-300' onClick={copyPassword}>Copy</button></div> 
          <div className='m-5'>

            <input className='mr-1' type="range" min={6} max={50} value={length} onChange={(e)=>setLength(e.target.value)}/><label htmlFor='length' className='mr-3'>Length: {length} </label>
            <input className='mr-3' type="checkBox" value={numbers} defaultChecked={numbers} onChange={()=>{setNumbers((prev)=>!prev)}}  /><label>Numbers </label>
            <input className='mr-3' type="checkBox" value={characters} defaultChecked={characters} onChange={()=>{setCharacters((prev)=>!prev)}} /><label>Characters </label>          
          </div>
          
      </div>
          <button className='px-3 py-0.5 rounded-xl bg-blue-300 ml-40 hover:bg-blue-400' onClick={generatePassword}>Generate</button>
    </div>
    </>
  )
}

export default App;
