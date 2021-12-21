import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const { id, desc, done } = todo;

  const onDelete = () => {
    dispatch({ type: "delete", payload: id });
  };

  const onToggle = () => {
    dispatch({ type: "toggle", payload: id });
  };

  return (
    <div className="todo-item">
      <button className="btn btn--check" onClick={onToggle}>
        <i className={`fa ${done ? "fa-list-ul" : "fa-check"}`}></i>
      </button>
      <p className={`text ${done && "line-through"}`}>{desc}</p>
      <button className="btn btn--delete" onClick={onDelete}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
