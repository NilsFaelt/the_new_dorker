import React from "react";
import { Link } from "react-router-dom";
import Styles from "./burgerMenu.module.css";

interface Props {
  setToogleChat: (toogle: boolean) => void;
}
const BurgerMenu: React.FC<Props> = ({ setToogleChat }) => {
  return (
    <nav className={Styles.container}>
      <ul className={Styles.firstUl}>
        <hr className={Styles.firstHr} />
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.firstLi}>News</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.firstLi}>Sports</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.firstLi}>Weather</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.firstLi}>Finnance</li>
        </Link>
      </ul>
      <hr className={Styles.secondHr} />
      <ul className={Styles.firstUl}>
        <Link
          onClick={() => setToogleChat(true)}
          className={Styles.link}
          to={"/"}
        >
          <li className={Styles.secondLi}>Chat</li>
        </Link>
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
          <li className={Styles.secondLi}>Subscribe</li>
        </Link>
        <Link className={Styles.link} to={"/"}>
          <li className={Styles.secondLi}>Recive Newsletter</li>
        </Link>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
