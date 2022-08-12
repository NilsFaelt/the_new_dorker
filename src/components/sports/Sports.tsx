import PopUp from "../popUp/PopUp";
import Styles from "./sports.module.css";
import ReactPlayer from "react-player";

const Sports = () => {
  return (
    <div className={Styles.container}>
      <h4>Live News</h4>
      <div className={Styles.playerDiv}>
        <ReactPlayer
          controls={false}
          width={"80vw"}
          height={"50vh"}
          style={{ marginTop: "10vh", pointerEvents: "none" }}
          playing={true}
          url='https://www.youtube.com/watch?v=9Auq9mYxFEE'
        />
        <PopUp />
      </div>
    </div>
  );
};

export default Sports;
