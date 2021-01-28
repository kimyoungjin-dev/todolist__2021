import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState();

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setClock(
      `${hours < 10 ? `0${hours} ` : hours}:${
        minutes < 10 ? `0${minutes} ` : minutes
      }:${seconds < 10 ? `0${seconds} ` : seconds}`
    );
  };

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, [clock]);

  return <div className="Clock">{clock}</div>;
};

export default Clock;
