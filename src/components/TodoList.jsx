import React from "react";
import Todo from "./Todo";
import "../styles/todo.css";

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div className="todos">
      {todos &&
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
}

export default TodoList;
