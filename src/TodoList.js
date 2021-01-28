import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  toggleEditing,
  todos,
  checkChange,
  chooseSelectedTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          toggleEditing={toggleEditing}
          chooseSelectedTodo={chooseSelectedTodo}
          checkChange={checkChange}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
