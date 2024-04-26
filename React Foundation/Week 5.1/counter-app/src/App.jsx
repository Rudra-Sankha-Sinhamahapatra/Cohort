import { useState } from 'react'
import './App.css'

//state and component
// let state={
//   count:0
// }
//jsx:javascript xml

function App() {
  const [todos, setTodos] = useState([{
  title:"Go to Gym",
  description: "Go to gym from 7-9 ",
  completed:false
},
{
  title:"Study DSA",
  description: "Study DSA from 9-11",
  completed:true
}])

function addTodo(){
  setTodos([...todos,{
title:"new todo",
description:"descrition of new todo"
  }])
}
  return (
    <>
    <div>
 <button onClick={addTodo}>Add a Random Todo</button>
 {
  todos.map(function(todo,index){
    return <Todo key={index} title={todo.title} description={todo.description}/>
  })
 }
    </div>
    </>
  )

}

//todo app
//title
//description
//complete
function Todo(props){
return(
<div>
  <h1>{props.title}</h1>
  <p>{props.description}</p>
</div>
)
}

export default App
