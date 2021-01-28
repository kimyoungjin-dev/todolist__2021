import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon.js";

const WeatherInfo = ({
  temperature,
  country,
  loading,
  location,
  condition,
}) => {
  const [day, setDay] = useState("");

  const getDay = () => {
    let array = Array.of(
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDSDAY",
      "THURSDAY",
      "FRIDAY",
      "SATARDAY"
    );
    const date = new Date();
    const day = date.getDay();
    setDay(array[day]);
  };

  useEffect(() => {
    getDay();
  }, []);

  return (
    <div className="WeatherInfo">
      <span className="WeatherInfo__condition">
        <WeatherIcon condition={condition} />
      </span>
      <span>{condition}</span>
      <span className="WeatherInfo__temperature">{temperature}℃</span>
      <div>{day}</div>
    </div>
  );
};

export default WeatherInfo;
