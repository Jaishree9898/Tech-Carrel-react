import React from 'react';
import Input from './Components/Input';

function App() {
  return (
    <>
      <div className='bg-gray-100 mx-w-sm rounded overflow-hidden shadow-lg text-center m-5 max-w-2xl place-self-center mt-2 pt-3'><h1 className='text-3xl font-semibold'>To-Do-List</h1>
        <Input />
        </div>
    </>
  )
}

export default App