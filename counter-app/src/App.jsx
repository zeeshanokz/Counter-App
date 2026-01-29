import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)

const date = new Date("29 Jan 2026");
date.setDate(date.getDate() + count);

const MIN_COUNT = 0;
const MIX_COUNT = 30;

const MIN_STEP = 1;
const MIX_STEP = 20;


  return (

    <>
    <div className= "justify-center font-bold mt-24 border-2 bg-blue-400 border-black border-dotted w-100 h-50 ml-86">
     <h1 className='text-center mb-2 mt-4' >Counter</h1>
    
     <div className='text-center items-center'>
     <button className='pr-2.5' onClick={() => setCount(c => Math.max(MIN_COUNT, c -1))}> - </button>
     <span>count: {count}</span>
      <button className='pl-2.5' onClick={() => setCount(c =>Math.min(MIX_COUNT, c + 1))}> + </button>
     </div>
    
     <div className='text-center'>
     <button className='pr-2.5' onClick={() => setStep(s => Math.max(MIN_STEP, s - 1))}> - </button>
     <span>step: {step}</span>
      <button className='pl-2.5' onClick={() => setStep(s => Math.min(MIX_STEP, s + 1 ))}> + </button>
     </div>
     <p className='text-center'>
    {/* <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span> */}
        <span>
          {count === 0 ? "Today is" : count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
         
     </div>
    </>
  )
}

export default App;
