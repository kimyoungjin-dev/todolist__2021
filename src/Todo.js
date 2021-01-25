import React, { useState } from "react";
import Todolist from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTodos(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodos, checked: false }]);
    setNewTodos("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={newTodos} />
        <input type="submit" value="확인" />
      </form>
      <ul>
        <Todolist todos={todos} />
      </ul>
    </>
  );
};

export default Todo;
