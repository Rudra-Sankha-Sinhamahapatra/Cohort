import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const { todos, loading } = useTodos(6);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))}
    </>
  );
}

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  function getData() {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }
  useEffect(() => {
    const value = setInterval(() => {
      getData();
    }, n * 1000);
    
    getData();
    return () => {
      clearInterval(value);
    };
  }, [n]);

  return {
    todos: todos,
    loading: loading,
  };
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
