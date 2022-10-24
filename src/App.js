import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: true },
    { name: "Clean bathroom", priority: true },
    { name: "Car's MOT", priority: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const [isChecked, setChecked] = useState(true);

  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index} className={todo.priority ? "purchased" : "not-purchased"}>
        <span>{todo.name}</span>
        {todo.priority ? <span>high</span> : <span>low</span>}
        {/* Trying to make a delete button */}
        <button onClick={() => deleteTodo(index)}>
          <span>X</span>
        </button>
      </li>
    );
  });

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value);
  };

  const handleChecked = (event) => {
    console.log(event.target.value);
    setChecked(event.target.value);
  };

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({ name: newTodo, priority: isChecked });
    setTodos(copyTodos);
    setNewTodo("");
  };

  function deleteTodo(index) {
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  }

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
        <input
          type="radio"
          id="high"
          name="priority"
          value={isChecked}
          onChange={handleChecked}
        ></input>
        <label htmlFor="low">Low</label>
        <input
          type="radio"
          id="low"
          name="priority"
          value={!isChecked}
          onChange={handleChecked}
        ></input>
        <input type="submit" value="Save Item"></input>
      </form>

      <ul>{todoNodes}</ul>
    </div>
  );
}

export default App;
