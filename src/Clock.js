import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState("Loading...");

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setClock(
      `${hours < 10 ? `0${hours} ` : hours}시:${
        minutes < 10 ? `0${minutes} ` : minutes
      }분:${seconds < 10 ? `0${seconds} ` : seconds}초`
    );
  };

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, [clock]);

  return <div>{clock}</div>;
};

export default Clock;
