import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [text, setText] = useState("");

  const user = localStorage.getItem("currentUser", text);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("currentUser", text);
    setText("");
  };

  return (
    <>
      {!user ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            value={text}
            placeholder="USER"
          />
          <input type="submit" value="확인" />
        </form>
      ) : (
        <div>
          <h1>"{user}"님 안녕하세요!</h1>
        </div>
      )}
    </>
  );
};

export default Greeting;
