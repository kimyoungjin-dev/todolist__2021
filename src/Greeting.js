import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [value, setValue] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setCurrentUser(localStorage.getItem("currentUser"));
  }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
    localStorage.setItem("currentUser", value);
    setCurrentUser(true);
  };

  return (
    <>
      {!currentUser ? (
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onChange} value={value} />
          <input type="submit" value="확인" />
        </form>
      ) : (
        <div>
          <h1>{localStorage.getItem("currentUser")}</h1>
        </div>
      )}
    </>
  );
};

export default Greeting;
