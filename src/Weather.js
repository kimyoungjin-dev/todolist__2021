import axios from "axios";
import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherLoading from "./WeatherLoading";
const API_KEY = "1cce20274897538f27f72a370b9bb045";

const Weather = () => {
  const [loading, setLoading] = useState(false); //차후 true 수정
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState(null);
  const [condition, setCondition] = useState(null);
  const [country, setCountry] = useState(null);

  const getWeather = async (lat, long) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    );

    setTemperature(data.main.temp);
    setLocation(data.name);
    setCondition(data.weather[0].main);
    setCountry(data.sys.country);
    setLoading(false);
  };

  const getLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        getWeather(lat, long);
      });
    } catch (error) {
      array("현재위치를 찾을수없습니다.", "다시시도해주세요");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      {loading ? (
        <WeatherLoading />
      ) : (
        <WeatherInfo
          loading={loading}
          temperature={temperature}
          country={country}
          location={location}
          condition={condition}
        />
      )}
    </>
  );
};

export default Weather;
