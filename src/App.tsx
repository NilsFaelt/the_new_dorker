import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/chatcomp/Chat";
import Finnance from "./components/finnance/Finnance";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menus/menu/Menu";
import News from "./components/news/News";
import SellNews from "./components/sellNews/SellNews";
import Sports from "./components/sports/Sports";
import Weather from "./components/weather/Weather";
import { WEATHER_API_KEY, NEWS_API_KEY } from "./apiKeys";
import "./index.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import PopUp from "./components/popUp/PopUp";

interface Condition {
  text: string;
  icon: string;
}
interface WeatherApi {
  condition: Condition;
  temp_c: number;
  is_day: number;
}
interface NewsInterFace {
  author?: string;
  content: string;
  publishedAt?: string;
  title: string;
  urlToImage: string;
}

function App() {
  const [city, setCity] = useState<string>("stockholm");
  const [weather, setWeather] = useState<WeatherApi | null>(null);
  const [news, setNews] = useState<NewsInterFace[] | null>(null);
  const [tooglWeather, setToogleWetaher] = useState<boolean>(false);
  const [tooglChat, setToogleChat] = useState<boolean>(false);
  const subscribeRef = useRef<any>(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/everything?q=Apple&from=2022-08-08&sortBy=popularity&apiKey=${NEWS_API_KEY}`
      );
      setNews(response.data.articles);
    } catch (err) {
      console.log(`Something went wrong in fetch news, ${err}`);
    }
  };
  console.log(news);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}=${city}&aqi=no`
      );
      setWeather(response.data.current);
    } catch (err) {
      console.log("Failed to fetch weather api, error:", err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  useEffect(() => {
    fetchNews();
  }, []);

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
        <Route path='/' element={<News news={news} />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/finnance' element={<Finnance />} />
        <Route path='/sellnews' element={<SellNews />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
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
      <Footer
        setToogleWetaher={setToogleWetaher}
        subscribeRef={subscribeRef}
        setToogleChat={setToogleChat}
      />
    </div>
  );
}

//news api
//news search function
// fix key chat
//fix ts for subscribeRef

export default App;
