import { Link } from "react-router-dom";
import Styles from "./menu.module.css";

const Menu = () => {
  return (
    <nav className={Styles.container}>
      <ul className={Styles.nav}>
        <Link className={Styles.link} to={"/"}>
          <li>News</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li>Sports</li>
        </Link>
        <Link className={Styles.link} to={"/weather"}>
          <li>Weather</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li>Finnance</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
