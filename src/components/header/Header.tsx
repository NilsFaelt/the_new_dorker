import Styles from "./header.module.css";
import { MenuIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
import { getDate } from "../../functions/getDate";
import { Link } from "react-router-dom";
import BurgerMenu from "../menus/burger/BurgerMenu";
import { useState } from "react";
import Login from "../login/Login";

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
  weather: Weather;
  city: string;
  setToogleChat: (toogle: boolean) => void;
}

const Header: React.FC<Props> = ({ weather, city, setToogleChat }) => {
  const date = getDate();
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);
  const [toogleLogin, setToogleLogin] = useState<boolean>(false);
  const toogleMenuOnClick = () => {
    setToogleMenu(!toogleMenu);
  };
  return (
    <header className={Styles.container}>
      <MenuIcon onClick={() => toogleMenuOnClick()} className={Styles.burger} />
      <UserIcon
        onClick={() => setToogleLogin(!toogleLogin)}
        className={Styles.user}
      />
      <Link className={Styles.link} to={"/"}>
        <h1 className={Styles.title}>The New Dorker</h1>
      </Link>
      {toogleLogin ? <Login setToogleLogin={setToogleLogin} /> : null}

      <div className={Styles.weatherDiv}>
        <div>
          <p>Weather: {city}</p>
          <p>Temp: {weather?.temp_c} °</p>
        </div>
        <img className={Styles.logo} src={weather?.condition.icon} alt='' />
      </div>
      <p className={Styles.date}> Date: {date}</p>
      {toogleMenu ? <BurgerMenu setToogleChat={setToogleChat} /> : null}
    </header>
  );
};

export default Header;
