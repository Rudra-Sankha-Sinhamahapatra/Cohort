import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  
  return (
    <>
<div>
<Todo id={1}/>
</div>
    </>
  )
}


function Todo({id}){
  const[todo,setTodo]=useState({})
  useEffect(()=>{
axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
.then(function(res){
  setTodo(res.data.todo);
})
  },[])
return (
  <>
  <div>
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
  </>
)
}

export default App
