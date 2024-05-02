import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

// function a(){
//   console.log("hii there");
// }

//useCallBack prevents unnecessary re renders of child functions(components) caused by parent re render
const a=useCallback(function(){
console.log('child clicked');
},[])


  return (
    <>
    <div>
<button onClick={()=>{
  setCount(count+1);
}}>Counter:{count}</button> <br />

<Demo a={a}/>

    </div>

    </>
  )
}

//memo is used to memoize the rendering of a component
//useMemo is a hook provided by React that memoizes the result of a function or computation.
const Demo=memo(function({a}){
  console.log('child render');
  return(
    <>
    <button onClick={a}>Button Clicked</button>
    </>
  )
})

export default App
