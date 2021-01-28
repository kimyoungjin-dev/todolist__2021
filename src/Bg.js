import React from "react";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";

const Bg = () => {
  const number = Math.floor(Math.random() * 5 + 1);
  const randomNumber = number === 1 ? image4 : image2;
  return (
    <div className="backgroundImage">
      <img src={randomNumber} />
    </div>
  );
};

export default Bg;
