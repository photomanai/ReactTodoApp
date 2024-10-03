import React from "react";
import Todo from "./Todo";
import "../styles/todo.css";

function TodoList({ todos, onRemoveTodo }) {
  return (
    <div className="todos">
      {todos &&
        todos.map((todo) => (
          <Todo todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} />
        ))}
    </div>
  );
}

export default TodoList;
