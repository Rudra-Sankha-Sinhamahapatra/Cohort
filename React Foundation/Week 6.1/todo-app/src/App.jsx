import { useState } from 'react'
import { Todo } from '../components/Todo'

let counter=4;

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
     title:"Gym",
     description:"Go to gym"
    },
    {
    id:2,
    title:"Eat",
    description:"Eat proper food"
    },
    {
    id:3,
    title:"sleep",
    description:"7 hours of sleep"
    }
  ])

  function addTodos(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
    <>
      <div>
        <button onClick={addTodos}>Add a new todo</button>
     {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
        
      </div>
    </>
  )
}

export default App
