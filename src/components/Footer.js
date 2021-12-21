import React, { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { TodoContext } from "../context/TodoContext";

export const Footer = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [pending, setPending] = useState(0);

  const onClear = () => {
    dispatch({ type: "clear" });
  };

  useEffect(() => {
    let count = todos.filter((todo) => !todo.done);
    setPending(count.length);
  }, [todos]);

  return (
    <footer>
      <section className="footer">
        <p className="text">
          You have{" "}
          <strong>
            <i>{pending}</i>
          </strong>{" "}
          tasks pending from{" "}
          <strong>
            <i>{todos.length}</i>
          </strong>{" "}
          tasks
        </p>
        <button className="btn btn--clear" onClick={onClear}>
          Clear All
        </button>
      </section>
      <p className="beckycode">
        Made with ❤ by <a href="https://beckycode.com/">BeckyCode</a>
      </p>
    </footer>
  );
};
