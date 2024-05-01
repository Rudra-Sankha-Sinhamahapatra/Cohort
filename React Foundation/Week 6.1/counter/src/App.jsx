import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
useEffect(()=>{
  alert(counter);
},[counter])

  return (
    <>
      <div>
        <button onClick={()=>{
          setCounter(counter=>counter+1);
        }}>Increase Count:{counter}</button>
      </div>
    </>
  )
}

export default App
