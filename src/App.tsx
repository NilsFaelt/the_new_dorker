import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/chatcomp/Chat";
import Finnance from "./components/finnance/Finnance";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menus/menu/Menu";
import News from "./components/news/News";
import Sports from "./components/sports/Sports";
import Weather from "./components/weather/Weather";
import "./index.css";
// import "dotenv/config";

function App() {
  const WEATHER_API_KEY = "bc92e385e48e4fcba9b162805220208&q";
  const NEWS_API_KEY = "a0dcbd0f6a23420eb6d0e9f9adf81dde";
  const [city, setCity] = useState<string>("stockholm");
  const [weather, setWeather] = useState<any | null>(null);
  const [tooglWeather, setToogleWetaher] = useState<boolean>(false);
  const [tooglChat, setToogleChat] = useState<boolean>(false);
  const subscribeRef = useRef<any>(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-08-08&sortBy=popularity&apiKey=${NEWS_API_KEY}`
      );
      console.log(response.data);
    } catch (err) {
      console.log(`Something went wrong in fetch news, ${err}`);
    }
  };
  // fetchNews();

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
      <Header
        setToogleWetaher={setToogleWetaher}
        setToogleChat={setToogleChat}
        weather={weather}
        city={city}
        subscribeRef={subscribeRef}
      />
      <Menu setToogleWetaher={setToogleWetaher} />
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/finnance' element={<Finnance />} />
      </Routes>
      {tooglWeather ? (
        <Weather
          weather={weather}
          city={city}
          setCity={setCity}
          setToogleWetaher={setToogleWetaher}
        />
      ) : null}
      {tooglChat ? <Chat setToogleChat={setToogleChat} /> : null}
      <Footer subscribeRef={subscribeRef} setToogleChat={setToogleChat} />
    </div>
  );
}

//dotenv firebase api
//news api
//news search function
// about
//contact
// all links footer menu header
// a0dcbd0f6a23420eb6d0e9f9adf81dde  news api key
// fix key chat
//fix ts for subscribeRef
export default App;
