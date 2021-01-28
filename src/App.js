import React from "react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import Todo from "./Todo";
import Weather from "./Weather";
import Bg from "./Bg";
import "./styles.css";
import "./Weather.css";
import "./status-bar.css";

const App = () => {
  return (
    <>
      <div>
        <Bg />
        <Weather />
        <Todo />
        <Clock />
        <Greeting />
      </div>
    </>
  );
};

export default App;
