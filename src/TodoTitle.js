import React from "react";

const TodoTitle = ({ todosLength }) => {
  return (
    <div className="TodoTitle">
      <span className="TodoTitle__title">Today's To-Do</span>
      <br />
    </div>
  );
};

export default TodoTitle;
