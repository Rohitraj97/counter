 
import { useState } from 'react';
import './App.css';

function App() {

  const [counter,setCounter] =  useState(0)
  const handleAdd = () =>
  {
    if(counter>=Infinity)
    {
      return
    }
    setCounter(counter+1)
  }

  const handleSub = () =>
  {
    if(counter<=-Infinity)
    {
      return
    }
    setCounter(counter-1)
  }

  const handleDouble = () =>
  {
    if(counter>=Infinity)
    {
      return
    }
    setCounter(counter+2)
  }

 return(
   <>
   <div className="head">

  <h3 className={`${counter%2===0 ? "green" : "red"}`}>counter: {counter}</h3>
   
    
   <button onClick={handleAdd}>ADD 1</button>
   <button onClick={handleSub}>SUB 1</button>
   <button onClick={handleDouble}>Double</button>
   

   </div>
   </>
 )
}
export default App;
