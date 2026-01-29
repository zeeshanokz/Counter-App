import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)

const date = new Date("29 Jan 2026");
date.setDate(date.getDate() + count);


  return (

    <>
    <div className= "justify-center font-bold mt-24 border-2 border-black border-dotted w-100 h-50 ml-86">
     <h1 className='text-center mb-2 mt-4' >Counter</h1>
    
     <div className='text-center items-center'>
     <button className='pr-2.5' onClick={() => setCount((c) => c -1)}> - </button>
     <span>count: {count}</span>
      <button className='pl-2.5' onClick={() => setCount(count + 1)}> + </button>
     </div>
    
     <div className='text-center'>
     <button className='pr-2.5' onClick={() => setStep((s) => s - 1)}> - </button>
     <span>Step: {step}</span>
      <button className='pl-2.5' onClick={() => setStep((s) => s + 1 )}> + </button>
     </div>
     <p className='text-center'>
    <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
         
     </div>
    </>
  )
}

export default App;
