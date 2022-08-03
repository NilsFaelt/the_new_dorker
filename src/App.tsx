import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Menu from "./components/menus/menu/Menu";
import Weather from "./components/weather/Weather";
import "./index.css";
// import "dotenv/config";

function App() {
  const WEATHER_API_KEY = "bc92e385e48e4fcba9b162805220208&q";
  const [city, setCity] = useState<string>("miami");
  const [weather, setWeather] = useState<any | null>(null);
  console.log(city);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}=${city}&aqi=no`
      );
      setWeather(response.data.current);
    } catch (err) {
      console.log("Failed to fetch weather api, error:", err);
    }
  };

  // useEffect(() => {
  //   fetchWeather();
  // }, [city]);

  return (
    <div className='App'>
      <Header weather={weather} city={city} />
      <Menu />
      <Routes>
        <Route
          path='/weather'
          element={<Weather weather={weather} city={city} setCity={setCity} />}
        />
      </Routes>
    </div>
  );
}

export default App;
