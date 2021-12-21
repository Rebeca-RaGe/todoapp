import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const Header = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    dispatch({
      type: "add",
      payload: {
        id: new Date().getTime(),
        desc: text,
        done: false,
      },
    });
    setText("");
  };

  return (
    <header className="header-form">
      <h1 className="title header-form__title">TodoApp Rebe</h1>
      <section className="header-form__form">
        <form onSubmit={onSubmit}>
          <input
            autoComplete="false"
            className="input"
            name="task"
            onChange={onChange}
            placeholder="Make a css cake"
            type="text"
            value={text}
          ></input>
          <button className="btn btn--add" type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </section>
    </header>
  );
};
