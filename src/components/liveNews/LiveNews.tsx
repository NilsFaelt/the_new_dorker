import PopUp from "../popUp/PopUp";
import Styles from "./sports.module.css";
import ReactPlayer from "react-player";
import { useState } from "react";
import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";

const LiveNews = () => {
  const [mute, setMute] = useState(true);
  return (
    <div className={Styles.container}>
      <h4>Live News</h4>
      <div className={Styles.playerDiv}>
        <ReactPlayer
          muted={mute}
          controls={false}
          width={"80vw"}
          height={"50vh"}
          style={{ marginTop: "10vh", pointerEvents: "none" }}
          playing={true}
          url='https://www.youtube.com/watch?v=YDfiTGGPYCk'
        />
        {mute ? (
          <VolumeOffIcon
            onClick={() => setMute(!mute)}
            className={Styles.sound}
          />
        ) : (
          <VolumeUpIcon
            onClick={() => setMute(!mute)}
            className={Styles.sound}
          />
        )}
      </div>
      <PopUp />
    </div>
  );
};

export default LiveNews;
