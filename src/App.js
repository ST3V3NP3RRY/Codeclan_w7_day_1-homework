import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index} className={todo.priority ? "purchased" : "not-purchased"}>
        <span>{todo.name}</span>
        {todo.priority ? <span>high</span> : <span>low</span>}
      </li>
    );
  });

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value);
  };

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({ name: newTodo, priority: "low" });
    setTodos(copyTodos);
    setNewTodo("");
  };

  return (
    <div>
      <h1>Todo's</h1>

      <form onSubmit={saveNewTodo}>
        {/* <label htmlFor="new-todo">Add a new todo item:</label> */}
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={handleTodoInput}
        ></input>
        <label htmlFor="high">High</label>
        <input type="radio" id="high" name="priority" value="high"></input>
        <label htmlFor="low">Low</label>
        <input type="radio" id="low" name="priority" value="low"></input>
        <input type="submit" value="Save Item"></input>
      </form>

      <ul>{todoNodes}</ul>
    </div>
  );
}

export default App;
