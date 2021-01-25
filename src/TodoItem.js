import React from "react";
import "./TodoItem.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const TodoItem = ({ todo, checkChange, toggleEditing, chooseSelectedTodo }) => {
  const { id, text, checked } = todo;

  return (
    <div className={`contents ${checked ? "checked" : ""}`}>
      {checked ? (
        <ImCheckboxChecked
          onClick={() => {
            checkChange(id);
          }}
        />
      ) : (
        <ImCheckboxUnchecked
          onClick={() => {
            checkChange(id);
          }}
        />
      )}
      <h3
        onClick={() => {
          chooseSelectedTodo(todo);
          toggleEditing();
        }}
        className="text"
      >
        {text}
      </h3>
    </div>
  );
};

export default TodoItem;
