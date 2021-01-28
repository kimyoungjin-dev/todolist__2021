import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

const Weather = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = (lat, long) => {};
  const getLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        getWeather(lat, long);
      });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      {loading ? "Loading... " : <WeatherInfo />}
      <div>{error}</div>
    </>
  );
};

export default Weather;
