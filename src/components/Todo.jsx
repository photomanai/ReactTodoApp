import React, { useState } from "react";
import { MdOutlineBookmarkRemove, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "../styles/todo.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const UpdateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div className="todo-row">
      <p>
        {editable ? (
          <input
            className="edit-todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        ) : (
          content
        )}{" "}
      </p>
      <div className="icon-c">
        {editable ? (
          <FaCheck className="edit-icon" onClick={UpdateTodo} />
        ) : (
          <MdEdit className="edit-icon" onClick={() => setEditable(true)} />
        )}
        <MdOutlineBookmarkRemove className="remove-icon" onClick={removeTodo} />
      </div>
    </div>
  );
}

export default Todo;
