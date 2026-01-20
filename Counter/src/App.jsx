import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  const counterUp = () =>{
    if(counter>30){
      setCounter===30;
    }
    if(counter<30){
      setCounter(counter+1);
    }
    // console.log(counter);
  }

  const counterDown = () =>{
    if(counter<0){
      setCounter===0;
    }
    if(counter>0){
      setCounter(counter-1);
    }
    // console.log(counter);
  }

  return (
    <>
      <h2>This is counter webpage by Kirtan Vaghela</h2>
      <h3>Given below is your counter</h3>
      <div>
        <h4>counter : {counter}</h4>
        <button onClick={counterUp}>Counter ⬆</button>  
        <button onClick={counterDown}>Counter ⬇</button>  
      </div>     
    </>
  )
}

export default App
