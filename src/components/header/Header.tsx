import Styles from "./header.module.css";
import { MenuIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
import { getDate } from "../../functions/getDate";
import { Link } from "react-router-dom";
import BurgerMenu from "../menus/burger/BurgerMenu";
import { useState } from "react";
import Login from "../login/Login";
import CreateAccount from "../login/createAccount/CreateAccount";
import SubscribeLock from "../subscribeLock/SubscribeLock";

interface Condition {
  text: string;
  icon: string;
}
interface Weather {
  condition: Condition;
  temp_c: number;
  is_day: number;
}

interface Props {
  subscribeRef: any;
  weather: Weather | null;
  city: string;
  setToogleChat: (toogle: boolean) => void;
  setToogleWetaher: (toogle: boolean) => void;
}

const Header: React.FC<Props> = ({
  weather,
  city,
  setToogleChat,
  setToogleWetaher,
  subscribeRef,
}) => {
  const date = getDate();
  const [loggedIn, setLoggedin] = useState<string | null>(null);
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);
  const [toogleLogin, setToogleLogin] = useState<boolean>(false);
  const [toogleCreateAccount, setToogleCreateAccount] =
    useState<boolean>(false);
  const [toogleMarket, setToogleMarket] = useState<boolean>(false);

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

  return (
    <header className={Styles.container}>
      <MenuIcon onClick={() => toogleMenuOnClick()} className={Styles.burger} />
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
          <p>Temp: {weather?.temp_c} °</p>
        </div>
        <img className={Styles.logo} src={weather?.condition.icon} alt='' />
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
