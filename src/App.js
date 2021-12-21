import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TodoList } from "./components/TodoList";
import { useEffect, useReducer } from "react";
import { todoReducer } from "./reducer/todoReducer";
import { TodoContext } from "./context/TodoContext";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <TodoContext.Provider value={{ todos: todos, dispatch: dispatch }}>
        <Header></Header>
        <TodoList></TodoList>
        <Footer></Footer>
      </TodoContext.Provider>
    </main>
  );
}

export default App;
