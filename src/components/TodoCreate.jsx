import React, { useState } from "react";
import "../styles/todo.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 99999999999999999),
      content: newTodo,
    };
    onCreateTodo(request);
  };

  return (
    <div className="todo-create">
      <input
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        type="text"
        placeholder="Enter Todo"
      />
      <button onClick={createTodo}>Create Todo</button>
    </div>
  );
}

export default TodoCreate;
