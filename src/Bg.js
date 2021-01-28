import React from "react";
import image2 from "./images/image2.webp";
import image3 from "./images/image3.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiStripedSun } from "react-icons/gi";

const Bg = () => {
  const number = Math.floor(Math.random() * 5 + 1);
  const randomNumber = number === 1 ? image2 : image3;

  return (
    <>
      <div className="bg">
        <img className="backgroundImage__image" src={randomNumber} />
      </div>
      <div className="WeatherInfo__status">
        <span>
          <GiHamburgerMenu />
        </span>
        <span>
          <GiStripedSun />
        </span>
      </div>
    </>
  );
};

export default Bg;
