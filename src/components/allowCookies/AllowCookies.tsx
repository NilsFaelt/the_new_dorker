import { useState } from "react";
import Styles from "./allowCookkies.module.css";

interface Props {
  setCookies: (toogle: boolean) => void;
}

const AllowCookies: React.FC<Props> = ({ setCookies }) => {
  return (
    <div className={Styles.container}>
      <h2>Privacy Notice</h2>
      <p>
        Our site collects and stores information about you, your preferences and
        behaviour, and your device to analyze website traffic, personalize
        content and ads, provide scoial media features. <br />
        Because we care about your privacy, you can decide wether to allow or
        reject the use of this technology.
      </p>
      <div className={Styles.btnDiv}>
        <button onClick={() => setCookies(false)}>Accept All</button>
        <button onClick={() => setCookies(false)}>Decline All</button>
      </div>
    </div>
  );
};

export default AllowCookies;
