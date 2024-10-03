import React from "react";
import Todo from "./Todo";
import "../styles/todo.css";

function TodoList({ todos }) {
  return (
    <div className="todos">
      {todos && todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
}

export default TodoList;
