import React, { useEffect, useState } from 'react';
import './App.css';
import { Todo } from '../components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://sum-server.100xdevs.com/todos')
        .then(async function(res) {
          const json = await res.json();
          setTodos(json.todos);
        });
    };

    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

export default App;
