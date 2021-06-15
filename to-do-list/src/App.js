import React, { useState, useEffect, useRef } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 454564),
      content,
      isCompleted: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent(" ");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          ref={inputRef}
        />
        <button className="todo-button">Ekle</button>
      </form>
      {/* Todolistesi */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
