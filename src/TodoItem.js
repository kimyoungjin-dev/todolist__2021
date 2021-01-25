import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  return (
    <div>
      {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      <h1>{text}</h1>
    </div>
  );
};

export default TodoItem;
