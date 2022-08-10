import Styles from "./popup.module.css";
import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const PopUp = () => {
  const [toogle, setToogle] = useState<boolean>(true);
  const arrayOfImgLInks = [
    "https://images.unsplash.com/photo-1518103744022-a2121047f429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1544015292-321d90e211c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1583001809853-b151ce5d6196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  ];
  const nrGen = Math.floor(Math.random() * 5 + 1);
  console.log(nrGen);
  return (
    <div className={Styles.container}>
      {toogle ? (
        <div className={Styles.imgWrapper}>
          <XIcon onClick={() => setToogle(false)} className={Styles.xIcon} />
          <img className={Styles.img} src={arrayOfImgLInks[nrGen]} alt='' />
        </div>
      ) : null}
    </div>
  );
};

export default PopUp;
