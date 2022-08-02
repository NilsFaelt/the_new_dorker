import Styles from "./header.module.css";
import { MenuIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className={Styles.container}>
      <MenuIcon className={Styles.burger} />
      <UserIcon className={Styles.user} />
      <h1 className={Styles.title}>The New Dorker</h1>
    </header>
  );
};

export default Header;
