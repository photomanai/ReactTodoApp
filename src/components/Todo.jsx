import React from "react";
import { MdOutlineBookmarkRemove, MdEdit } from "react-icons/md";
import "../styles/todo.css";

function Todo({ todo }) {
  const { id, content } = todo;
  return (
    <div className="todo-row">
      <p>{content} </p>
      <div className="icon-c">
        <MdEdit className="edit-icon" />
        <MdOutlineBookmarkRemove className="remove-icon" />
      </div>
    </div>
  );
}

export default Todo;
