import React, { useEffect, useState } from "react";
import Center from "./Center";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const getWeather = () => {};
  useEffect(() => {
    getWeather();
  }, []);

  return <>{loading ? "Loading..." : <Center />}</>;
};

export default Weather;
