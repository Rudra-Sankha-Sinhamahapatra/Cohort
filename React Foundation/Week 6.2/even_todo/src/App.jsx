import { useMemo, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function useTodo(){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos')
      .then((res) => {
        setTodos(res.data.todos);
      });
  }, []);

  return [todos, setTodos]; // Return the state variable and its updater function
}

function App(){
  const [todos, setTodos] = useTodo(); // Destructure the state variable and updater function from useTodo

  const filteredTodos = useMemo(() => todos.filter((todo) => (todo.id) % 2 === 0), [todos]);

  return(
    <>
      <div>
        {filteredTodos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h6>{todo.description}</h6>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
