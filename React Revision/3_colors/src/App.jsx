import { useState } from 'react'
import './App.css';


function App() {
  const [color, setColor] = useState('white');

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <>
    <div className='w-full h-screen duration-200' style={{background:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <button className='bg-red-600 text-white px-5 py-2.5 rounded-2xl shadow-2xl shadow-grey-200' onClick={()=>setColor('red')}>Red</button> 
        <button className='bg-blue-600 text-white px-5 py-2.5 rounded-2xl shadow-2xl shadow-grey-200' onClick={()=>setColor('blue')}>Blue</button> 
        <button className='bg-pink-400 text-white px-5 py-2.5 rounded-2xl shadow-2xl shadow-grey-200' onClick={()=>setColor('Pink')}>Pink</button> 
        <button className='bg-yellow-300 text-white px-5 py-2.5 rounded-2xl shadow-2xl shadow-grey-200' onClick={()=>setColor('yellow')}>Yellow</button> 
        <button className='bg-gray-400 text-white px-5 py-2.5 rounded-2xl shadow-2xl shadow-grey-200' onClick={()=>setColor('grey')}>Grey</button> 
        <button className='bg-white text-black px-5 py-2.5 rounded-2xl shadow-2xl shadow-grey-200' onClick={()=>setColor('white')}>Reset</button> 
              </div>      
    </div>
    </>

  )

}
export default App;
