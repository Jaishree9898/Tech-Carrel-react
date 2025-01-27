import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <div>
          <div>
            <div><label>From</label><input type="number" value={10} /></div>
            
            <div><label>Currency Type</label>
              <select>
                <option>USD</option>
                <option>INR</option>
                <option>EURO</option>
              </select>
            </div>

            <button>Swap</button>

            <div>
            <div><label>To</label><input type="number" value={10} /></div>
            
            <div><label>Currency Type</label>
              <select>
                <option>INR</option>
                <option>USD</option>
                <option>EURO</option>
              </select>
            </div>

          </div>
         </div>
          <button>Convert USD to INR</button>
        </div>
    </div>
    </>
  )
}

export default App
