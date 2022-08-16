import Styles from "./header.module.css";
import { MenuIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
import { getDate } from "../../functions/getDate";
import { Link } from "react-router-dom";
import BurgerMenu from "../menus/burger/BurgerMenu";
import { FormEvent, useEffect, useRef, useState } from "react";
import Login from "../login/Login";
import CreateAccount from "../login/createAccount/CreateAccount";
import SubscribeLock from "../subscribeLock/SubscribeLock";
import EachNews from "../eachNews/EachNews";
import ZommedInNews from "../zoomedInNews/ZommedInNews";

interface Weather {
  conditions: string;
  temp: number;
  icon?: string;
}

interface NewsInterFace {
  content: string;
  publishedAt?: string;
  title: string;
  image: string;
}

interface Props {
  subscribeRef: any;
  weather: Weather | null;
  city: string;
  news: NewsInterFace[] | null;
  setToogleChat: (toogle: boolean) => void;
  setToogleWetaher: (toogle: boolean) => void;
}

const Header: React.FC<Props> = ({
  weather,
  city,
  setToogleChat,
  setToogleWetaher,
  subscribeRef,
  news,
}) => {
  const date = getDate();
  const [loggedIn, setLoggedin] = useState<string | null>(null);
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);
  const [toogleLogin, setToogleLogin] = useState<boolean>(false);
  const [toogleCreateAccount, setToogleCreateAccount] =
    useState<boolean>(false);
  const [toogleMarket, setToogleMarket] = useState<boolean>(false);
  const [toogleSearch, setToogleSearch] = useState<boolean>(false);
  const [popUpNews, setPopUpNews] = useState<boolean>(false);
  const [searchNews, setSearchNews] = useState("");
  const [headerNewsSearch, setHeaderNewsSearch] = useState<
    NewsInterFace[] | null
  >(news);

  const toogleMenuOnClick = () => {
    setToogleMenu(!toogleMenu);
  };

  const toogleLoginOnClick = () => {
    setToogleLogin(true);
    if (toogleLogin) {
      setToogleLogin(false);
    }
    if (!toogleLogin && toogleCreateAccount) {
      setToogleLogin(false);
      setToogleCreateAccount(false);
    }
  };

  setTimeout(() => {
    setToogleMarket(!toogleMarket);
  }, 15000);

  const searchNewsOnClick = () => {
    setToogleSearch(!toogleSearch);
  };

  useEffect(() => {
    const filteredNews = news?.filter((news) =>
      news.title.toUpperCase().includes(searchNews.toUpperCase())
    );
    console.log(filteredNews);
    if (searchNews === "") {
      setHeaderNewsSearch(null);
    }
    if (searchNews !== "" && filteredNews) {
      setPopUpNews(true);
      setHeaderNewsSearch(filteredNews);
    }
  }, [searchNews]);

  const zomedInNEwsClickHandler = () => {
    setPopUpNews(false);
    setSearchNews("");
  };

  console.log(popUpNews);
  return (
    <header className={Styles.container}>
      <MenuIcon onClick={() => toogleMenuOnClick()} className={Styles.burger} />
      <SearchIcon
        onClick={() => searchNewsOnClick()}
        className={Styles.search}
      />
      {toogleSearch ? (
        <input
          onChange={(e) => setSearchNews(e.target.value)}
          className={Styles.inputSearch}
          type='text'
          placeholder='Search for news'
          value={searchNews}
        />
      ) : null}
      {headerNewsSearch && toogleSearch ? (
        <div>
          {headerNewsSearch?.map((eachNews) => (
            <div>
              <h3 className={Styles.searchNewsTitle}>
                {popUpNews ? (
                  <div onClick={() => zomedInNEwsClickHandler()}>
                    <ZommedInNews
                      popUpNews={eachNews}
                      setTooglePopUpNews={setPopUpNews}
                    />
                  </div>
                ) : null}
              </h3>
            </div>
          ))}
        </div>
      ) : null}
      <UserIcon
        onClick={() => toogleLoginOnClick()}
        className={!loggedIn ? Styles.user : Styles.userLogedIn}
      />
      {toogleMenu ? (
        <div
          onMouseOver={toogleMenuOnClick}
          className={Styles.closeMenuOnOutsideClick}
        ></div>
      ) : null}
      {loggedIn ? (
        <p className={Styles.logedInText}>LOGGEDIN AS: {loggedIn}</p>
      ) : null}
      <Link className={Styles.link} to={"/"}>
        <h1 className={Styles.title}>The New Dorker</h1>
      </Link>
      {toogleLogin ? (
        <Login
          loggedIn={loggedIn}
          setLoggedin={setLoggedin}
          setToogleLogin={setToogleLogin}
          setToogleCreateAccount={setToogleCreateAccount}
        />
      ) : null}
      {toogleCreateAccount ? (
        <CreateAccount
          setToogleLogin={setToogleLogin}
          setToogleCreateAccount={setToogleCreateAccount}
        />
      ) : null}

      <div className={Styles.weatherDiv}>
        {toogleMarket ? (
          <p className={Styles.marketPercent}>
            Nasdaq: <br /> <span className={Styles.percentGreen}>+1.2%</span>
          </p>
        ) : (
          <p className={Styles.marketPercent}>
            DowJones: <br /> <span className={Styles.percentRed}>-0.4%</span>
          </p>
        )}
        <div>
          <p>Weather: {city}</p>
          <p>Temp: {weather?.temp} F</p>
        </div>
        {/* <img className={Styles.logo} src={weather.conditions} alt='' /> */}
      </div>
      <p className={Styles.date}> Date: {date}</p>
      {toogleMenu ? (
        <BurgerMenu
          setToogleMenu={setToogleMenu}
          subscribeRef={subscribeRef}
          setToogleLogin={setToogleLogin}
          setToogleWetaher={setToogleWetaher}
          setToogleChat={setToogleChat}
        />
      ) : null}
      {loggedIn ? null : (
        <SubscribeLock
          setToogleCreateAccount={setToogleCreateAccount}
          setToogleLogin={setToogleLogin}
        />
      )}
    </header>
  );
};

export default Header;
