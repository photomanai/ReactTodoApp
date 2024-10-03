import React from "react";
import { MdOutlineBookmarkRemove, MdEdit } from "react-icons/md";
import "../styles/todo.css";

function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo;

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  return (
    <div className="todo-row">
      <p>{content} </p>
      <div className="icon-c">
        <MdEdit className="edit-icon" />
        <MdOutlineBookmarkRemove className="remove-icon" onClick={removeTodo} />
      </div>
    </div>
  );
}

export default Todo;
