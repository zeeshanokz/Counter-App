import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className= "justify-center font-bold items-center mt-24 border-2 border-black border-dotted w-100 h-50 ml-86">
     <h1 className='text-center mb-2' >Counter</h1>
     <div className='text-center items-center'>
     <span className='pr-2.5'><button onClick={() => setCount(count -1)}>  - </button></span>
     <span>{count}</span>
     <span className='pl-2.5'>
      <button onClick={() => setCount(count + 1)}> + </button>
     </span>
     </div>
     </div>
    </>
  )
}

export default App;
