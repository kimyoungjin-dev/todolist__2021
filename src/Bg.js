import React, { useEffect, useState } from "react";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import "./Bg.css";

const Bg = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    setNumber(randomNumber === 1 ? image1 : image2);
  }, []);

  return (
    <div className="backgroundImage">
      <img src={number} />
    </div>
  );
};

export default Bg;
