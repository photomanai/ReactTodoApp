import React from "react";
import "../styles/todo.css";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input type="text" placeholder="Enter Todo" />
      <button>Create Todo</button>
    </div>
  );
}

export default TodoCreate;
