import React from "react";

const TodoTitle = ({ todosLength }) => {
  return <div className="TodoTitle">오늘의 할일 {todosLength}개</div>;
};

export default TodoTitle;
