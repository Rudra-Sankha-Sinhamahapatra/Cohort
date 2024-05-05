
import { filteredTodos, todosAtom } from "./store/atoms/count";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";


function Todo() {
  const [title, setTitle] = useState("");
  const todos = useRecoilValue(filteredTodos);
  const setTodos = useSetRecoilState(todosAtom);

  const handleAddTodo = () => {
    if (title.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        description: "", // assuming you want to add a description too
        completed: false,
      };
      setTodos((oldTodos) => [...oldTodos, newTodo]);
      setTitle("");
    } else {
      alert("Please enter a title for the todo.");
    }
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  const toggleCompleted = (id) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}
          />
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
