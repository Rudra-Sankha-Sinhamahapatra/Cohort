import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  return (
    <>
    <div>
      <button onClick={()=>{
        setCount(count+1);
        // console.log(count)
        setCount(count+1);
        console.log(count)
      }}>Click me:{count}</button>
    </div>

<div>
      <button onClick={()=>{

        // console.log(count1)
        setCount1(count1=>count1+1);
        setCount1(count1=>count1+1)
        console.log(count1)
      }}>Click me:{count1}</button>
    </div>
    </>
  )
}

export default App
