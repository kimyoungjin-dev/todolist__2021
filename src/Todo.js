import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import { FaPlusCircle } from "react-icons/fa";

import "./Todo.css";

let nextId = 4;

const Todo = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
      checked: false,
    },
    {
      id: 2,
      text: "할일2",
      checked: true,
    },
    {
      id: 3,
      text: "할일3",
      checked: false,
    },
  ]);

  const toggleEditing = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setEditing((prev) => !prev);
  };

  const addTodo = (text) => {
    if (text === "") {
      return alert("할일을 입력해주세요");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const checkChange = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const chooseSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    toggleEditing();
  };

  const updateTodo = (id, text) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    toggleEditing();
  };
  return (
    <>
      <div>
        <TodoTitle todosLength={todos.length} />
        <TodoInsert
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          selectedTodo={selectedTodo}
          toggleEditing={toggleEditing}
          addTodo={addTodo}
          editing={editing}
        />
        <TodoList
          toggleEditing={toggleEditing}
          chooseSelectedTodo={chooseSelectedTodo}
          todos={todos}
          checkChange={checkChange}
        />
      </div>
      <div
        onClick={() => {
          toggleEditing();
        }}
        className="plus__button"
      >
        <FaPlusCircle />
      </div>
    </>
  );
};

export default Todo;
