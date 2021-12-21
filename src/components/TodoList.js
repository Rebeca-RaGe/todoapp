import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <section className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </section>
  );
};
