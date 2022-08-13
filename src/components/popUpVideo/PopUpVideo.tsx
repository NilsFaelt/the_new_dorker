import Styles from "./popUpVideo.module.css";
import ReactPlayer from "react-player";
import { XIcon } from "@heroicons/react/solid";

interface Props {
  setNrgen: (nr: number) => void;
}

const PopUpVideo: React.FC<Props> = ({ setNrgen }) => {
  return (
    <div className={Styles.container}>
      <XIcon onClick={() => setNrgen(1)} className={Styles.xIcon} />
      <ReactPlayer
        loop={true}
        width={"50vw"}
        height={"40vh"}
        style={{ pointerEvents: "none", zIndex: "18" }}
        playing={true}
        muted={true}
        url={"https://www.youtube.com/watch?v=miO4nTBDois"}
      />
    </div>
  );
};

export default PopUpVideo;
