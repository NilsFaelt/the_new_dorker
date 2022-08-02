import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Weather from "./components/weather/Weather";
import "./index.css";
// import "dotenv/config";

function App() {
  const WEATHER_API_KEY = "bc92e385e48e4fcba9b162805220208&q";
  const [city, setCity] = useState<string>("stockholm");
  const [weather, setWeather] = useState<any | null>(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}=${setCity}&aqi=no`
      );
      setWeather(response.data.current);
    } catch (err) {
      console.log("Failed to fetch weather api, error:", err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  console.log(weather);

  return (
    <div className='App'>
      <Header />
      <Weather weather={weather} city={city} setCity={setCity} />
    </div>
  );
}

export default App;
