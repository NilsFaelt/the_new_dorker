import Styles from "./header.module.css";

const Header = () => {
  return (
    <header className={Styles.container}>
      <h1 className={Styles.title}>The New Dorker</h1>
    </header>
  );
};

export default Header;
