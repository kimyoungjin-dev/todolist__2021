import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Todo from "./Todo";

const App = () => {
  return (
    <>
      <div>
        <Greeting />
        <Clock />
        <Todo />
      </div>
    </>
  );
};

export default App;
