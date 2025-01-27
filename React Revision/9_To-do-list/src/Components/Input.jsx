import React, { useState } from 'react';


function Input() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewToDo] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    setTodos(...todos);
    setNewToDo('');
  }




  return (
    <>
       <div>
      <input value={newtodo} type="text" id="inputTask" placeholder="Enter task here" onChange={(e)=>setNewToDo(e.target.value)}
          class="px-2 py-2.5 w-md rounded bg-gray-300 mx-2 mb-6" />
        <button type='submit' onClick={addTask} id="addTask"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded">Add</button>
      </div>
      <div>
        {todos.map(todo => {
          <ul>
          <li className="'flex', 'items-center', 'justify-between', 'p-2', 'border', 'border-gray-300', 'rounded', 'mb-2'">
            <input type="check" />
            <span className="mr-2" onChange={(e) => setNewToDo(e.target.value)}>{newtodo}</span>
            <button className="'bg-red-500', 'hover:bg-red-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'ml-4'">Delete</button>
          </li>
        </ul>
          
        })}
        
    </div>
    </>
  )
}

export default Input;