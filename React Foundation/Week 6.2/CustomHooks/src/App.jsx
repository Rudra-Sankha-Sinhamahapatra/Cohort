import { useMemo, useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios'

function useTodos(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
axios.get('https://sum-server.100xdevs.com/todos')
.then((res)=>{
  setTodos(res.data.todos);
})
  },[]);

  return todos;
}

function App() {
const todos=useTodos();

  return (
    <>
   <div>
   {todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h5>{todo.description}</h5>
          </div>
        ))}
   </div>
    </>
  )
}

export default App
