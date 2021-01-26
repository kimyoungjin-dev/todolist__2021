import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Todo from "./Todo";
import Weather from "./Weather";
import Bg from "./Bg";

const App = () => {
  return (
    <>
      <div>
        <Bg />
        <Weather />
        <Greeting />
        <Clock />
        <Todo />
      </div>
    </>
  );
};

export default App;
