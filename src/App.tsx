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
import Sports from "./components/liveNews/LiveNews";
import Weather from "./components/weather/Weather";
import {
  WEATHER_API_KEY,
  NEWS_API_KEY,
  FINNANCE_API_KEY,
  FINNANCE_NEWS_API_KEY,
} from "./apiKeys";
import "./index.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import AllowCookies from "./components/allowCookies/AllowCookies";

interface WeatherApi {
  conditions: string;
  temp: number;
  icon: string;
  datetime?: string;
  sunrise?: string;
  sunset?: string;
}
interface NewsInterFace {
  content: string;
  publishedAt?: string;
  title: string;
  image: string;
}

interface StockGainersInterface {
  name: string;
  symbol: string;
  price: number;
  changesPercentage: number;
}

interface StocksInterface {
  companyName: string;
  country?: string;
  exchangeShortName?: string;
  marketCap?: number;
  price: number;
  symbol: string;
  sector: string;
}
interface StocksNewsInterface {
  title: string;
  image_url: string;
  uuid?: string;
  published_at?: string;
  description?: string;
}

function App() {
  const [city, setCity] = useState<string>("Stockholm");
  const [weather, setWeather] = useState<WeatherApi | null>(null);
  const [news, setNews] = useState<NewsInterFace[] | null>(null);
  const [stockNews, setStockNews] = useState<StocksNewsInterface[] | null>(
    null
  );
  const [stockGainers, setStockGainers] = useState<
    StockGainersInterface[] | null
  >(null);
  const [stocks, setStocks] = useState<StocksInterface[] | null>(null);
  const [tooglWeather, setToogleWetaher] = useState<boolean>(false);
  const [tooglChat, setToogleChat] = useState<boolean>(false);
  const [cookies, setCookies] = useState<boolean>(true);
  const subscribeRef = useRef<any>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=example&token=${NEWS_API_KEY}`
      );
      setNews(response.data.articles);
    } catch (err) {
      console.log(`Something went wrong in fetch news, ${err}`);
    }
  };

  const fetchStockGainers = async () => {
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${FINNANCE_API_KEY}`
      );
      setStockGainers(response.data);
    } catch (err) {
      console.log(`Something went wrong in fetch StockGainers, ${err}`);
    }
  };

  const fetchStocks = async () => {
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=160&apikey=${FINNANCE_API_KEY}`
      );
      setStocks(response.data);
    } catch (err) {
      console.log(`Something went wrong in fetch stocks, ${err}`);
    }
  };
  const fetchStocksNews = async () => {
    try {
      const response = await axios.get(
        `https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=${FINNANCE_NEWS_API_KEY}`
      );
      setStockNews(response.data.data);
    } catch (err) {
      console.log(`Something went wrong in fetch stock news, ${err}`);
    }
  };
  console.log(stockNews);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${WEATHER_API_KEY} `
      );
      setWeather(response.data.currentConditions);
      console.log(response);
    } catch (err) {
      console.log("Failed to fetch weather api, error:", err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  useEffect(() => {
    fetchStocksNews();
    fetchNews();
    fetchStockGainers();
    fetchStocks();
  }, []);

  console.log(news);

  return (
    <div className='App'>
      <Header
        setToogleWetaher={setToogleWetaher}
        setToogleChat={setToogleChat}
        weather={weather}
        city={city}
        subscribeRef={subscribeRef}
        news={news}
      />
      <Menu setToogleWetaher={setToogleWetaher} />
      <Routes>
        <Route path='/' element={<News news={news} />} />
        <Route path='/livenews' element={<Sports />} />
        <Route
          path='/finnance'
          element={
            <Finnance
              stockNews={stockNews}
              stocks={stocks}
              stockGainers={stockGainers}
            />
          }
        />
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
      <ChevronDoubleUpIcon className='arrowUp' onClick={scrollToTop} />
      <Footer
        setToogleWetaher={setToogleWetaher}
        subscribeRef={subscribeRef}
        setToogleChat={setToogleChat}
      />
      {cookies ? <AllowCookies setCookies={setCookies} /> : null}
    </div>
  );
}

// make news big onclick
// adds contact
//fix funcfile for fetch
//weather link app

export default App;
