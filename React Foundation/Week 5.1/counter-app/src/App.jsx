import { useState } from 'react'
import './App.css'

//state and component
// let state={
//   count:0
// }
//jsx:javascript xml



function App() {
  const [count, setCount] = useState(0);
  
function onClickHandler(){
  setCount(count+1);
  }

  return(
    <>
    <div>
     <Counter count={count}/>
    </div>
    </>
  )

  
function Counter(props){
  return(
    <>
     <button style={{background:"balck",color:"white"}} onClick={onClickHandler}>Counter:{props.count}</button>
    </>
  )
}
}




export default App
