import Styles from "./popup.module.css";
import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const PopUp = () => {
  const [toogle, setToogle] = useState<boolean>(true);
  const arrayOfImgLInks = [
    "https://images.unsplash.com/photo-1642647237318-3e30ff181a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=800",
    "https://images.unsplash.com/photo-1611407019488-0a354195b618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1635563121451-2f3cfbf26826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    "https://images.unsplash.com/photo-1608926324459-317fbd88ba3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1637949754765-c846a69c4509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  ];
  const nrGen = Math.floor(Math.random() * 5);

  return (
    <div className={Styles.container}>
      {toogle ? (
        <div className={Styles.imgWrapper}>
          <XIcon onClick={() => setToogle(false)} className={Styles.xIcon} />
          <img className={Styles.img} src={arrayOfImgLInks[nrGen]} alt='' />
          <p className={Styles.ad}>Advertisment</p>
        </div>
      ) : null}
    </div>
  );
};

export default PopUp;
