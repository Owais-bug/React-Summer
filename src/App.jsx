import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //Hook this is
let [counter , setCounter] = useState(15)
//let counter = 15;

const addValue = ()=> {
  console.log ("value added " , counter)
  counter = counter + 4;
  setCounter(counter )
}

const removeValue = ()=>{
  setCounter (counter -1)
}
  return (
    <>
      <h2>Owais aur React</h2>
      <h3>Counter value : {counter}</h3>

      <button onClick={addValue}>Add value{counter}</button>
       <br/>
      <button onClick = {removeValue}>remove value{counter}</button>

      <p>footer {counter}</p>
    </>
  )
}

export default App
