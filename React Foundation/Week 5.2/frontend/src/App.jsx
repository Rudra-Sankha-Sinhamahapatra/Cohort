import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'

let index=1;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json=await res.json();
      setTodos(json.todos);
    })
  },[])

  return (
    <>
<CreateTodo/>
<Todos  index={index++} todos={todos}/>
    </>
  )
}

export default App
