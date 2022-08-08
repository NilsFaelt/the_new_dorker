import { Link } from "react-router-dom";
import Styles from "./menu.module.css";

interface Props {
  setToogleWetaher: (change: boolean) => void;
}

const Menu: React.FC<Props> = ({ setToogleWetaher }) => {
  return (
    <nav className={Styles.container}>
      <ul className={Styles.nav}>
        <Link className={Styles.link} to={"/"}>
          <li>News</li>
        </Link>
        <Link className={Styles.link} to={"/sports"}>
          <li>Sports</li>
        </Link>
        <Link
          onClick={() => setToogleWetaher(true)}
          className={Styles.link}
          to={"/weather"}
        >
          <li>Weather</li>
        </Link>
        <Link className={Styles.link} to={"finnance"}>
          <li>Finnance</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
