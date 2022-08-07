import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/chatcomp/Chat";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menus/menu/Menu";
import Weather from "./components/weather/Weather";
import "./index.css";
// import "dotenv/config";

function App() {
  const WEATHER_API_KEY = "bc92e385e48e4fcba9b162805220208&q";
  const [city, setCity] = useState<string>("stockholm");
  const [weather, setWeather] = useState<any | null>(null);
  const [tooglWeather, setToogleWetaher] = useState<boolean>(false);
  const [tooglChat, setToogleChat] = useState<boolean>(false);

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
      <Header setToogleChat={setToogleChat} weather={weather} city={city} />
      <Menu setToogleWetaher={setToogleWetaher} />
      <Routes></Routes>
      {tooglWeather ? (
        <Weather
          weather={weather}
          city={city}
          setCity={setCity}
          setToogleWetaher={setToogleWetaher}
        />
      ) : null}
      {tooglChat ? <Chat setToogleChat={setToogleChat} /> : null}
      <Footer />
    </div>
  );
}

//dotenv firebase api
export default App;
