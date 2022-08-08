import React from "react";
import { Link } from "react-router-dom";
import Styles from "./burgerMenu.module.css";

interface Props {
  subscribeRef: any;
  setToogleChat: (toogle: boolean) => void;
  setToogleWetaher: (toogle: boolean) => void;
  setToogleLogin: (toogle: boolean) => void;
  setToogleMenu: (toogle: boolean) => void;
}
const BurgerMenu: React.FC<Props> = ({
  setToogleChat,
  setToogleWetaher,
  setToogleLogin,
  subscribeRef,
  setToogleMenu,
}) => {
  const subscribeFocusOnClick = () => {
    setToogleMenu(false);
    subscribeRef.current.focus();
  };

  return (
    <nav className={Styles.container}>
      <ul className={Styles.firstUl}>
        <hr className={Styles.firstHr} />
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.firstLi}>News</li>
        </Link>
        <Link className={Styles.link} to={"/sports"}>
          <li className={Styles.firstLi}>Sports</li>
        </Link>

        <li onClick={() => setToogleWetaher(true)} className={Styles.firstLi}>
          Weather
        </li>

        <Link className={Styles.link} to={"/finnance"}>
          <li className={Styles.firstLi}>Finnance</li>
        </Link>
      </ul>
      <hr className={Styles.secondHr} />
      <ul className={Styles.firstUl}>
        <li onClick={() => setToogleChat(true)} className={Styles.secondLi}>
          Chat
        </li>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.secondLi}>Contact</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.secondLi}>About</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.secondLi}>Work With Us</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.secondLi}>Share</li>
        </Link>
      </ul>
      <hr className={Styles.secondHr} />
      <ul className={Styles.firstUl}>
        <Link className={Styles.link} to={"/"}>
          <li
            onClick={() => subscribeFocusOnClick()}
            className={Styles.secondLi}
          >
            Subscribe
          </li>
        </Link>

        <li onClick={() => setToogleLogin(true)} className={Styles.secondLi}>
          Login/Create Account
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
