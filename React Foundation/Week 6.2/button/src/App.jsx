import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios'

function App() {

const [curr,setCurr]=useState(2);
  return (
    <>
       <div>
    <button id='1' onClick={function(){setCurr(1)}} >1</button>
      <button id='2' onClick={function(){setCurr(2)} }>2</button>
      <button id='3' onClick={function(){setCurr(3)} }>3</button>
      <button id='4' onClick={function(){setCurr(4)}} >4</button>
      <Button id={curr}/>
      </div>

   
    </>
  )
}


function Button({id}){
  const [todo, setTodo] = useState({});
  useEffect(()=>{
  axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async function(res){
      await setTodo(res.data.todo)
    })},[id])
  return(
    <>
  
    <div>
    <b>id:{id}</b>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
      </>
  )
}

export default App
