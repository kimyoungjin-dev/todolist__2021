import React from "react";
import image1 from "./images/image1.webp";

const WeatherLoading = () => {
  return (
    <>
      <div className="WeatherLoading">
        <img className="WeatherLoading__background__Image" src={image1} />
        <div className="WeatherLoading__title">
          <span>Loading...</span>
        </div>
      </div>
    </>
  );
};

export default WeatherLoading;
