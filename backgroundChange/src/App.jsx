import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [colour, setColour] = useState("black")
  const changeBg =() =>{

  }
  return (
    <>
      <div className='h-screen bg-red-500 flex flex-col justify-end duration-500'
      style={{backgroundColor: colour}}
      >
      <div className='flex m-3 p-3 rounded-xl bg-white '>
        <button onClick={()=> setColour("red")}className='bg-red-500 border-2 border-black rounded-lg m-auto text-white p-3'>Red</button>
        <button onClick={()=> setColour("blue")}className='bg-blue-500 border-2 border-black rounded-lg m-auto text-white p-3'>Blue</button>
        <button onClick={()=> setColour("green")}className='bg-green-500 border-2 border-black rounded-lg m-auto text-white p-3'>Green</button>
        <button onClick={()=> setColour("yellow")}className='bg-yellow-500 border-2 border-black rounded-lg m-auto text-white p-3'>Yellow</button>
        <button onClick={()=> setColour("black")}className='bg-black border-2 border-black rounded-lg m-auto text-white p-3'>Black</button>
      </div>
      </div>
    </>
  )
}

export default App
