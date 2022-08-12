import Styles from "./subscribeLock.module.css";
import newYork from "../../assets/newYork.png";

interface Props {
  setToogleLogin: (toogle: boolean) => void;
  setToogleCreateAccount: (toogle: boolean) => void;
}

const SubscribeLock: React.FC<Props> = ({
  setToogleCreateAccount,
  setToogleLogin,
}) => {
  return (
    <div className={Styles.container}>
      <h4>
        Subscribe or login to get acces <br /> to The New Dorker
      </h4>
      <div className={Styles.loginDiv}>
        <p onClick={() => setToogleLogin(true)} className={Styles.text}>
          Login?
        </p>
        <p onClick={() => setToogleCreateAccount(true)} className={Styles.text}>
          Create Account?
        </p>
      </div>
      <img className={Styles.newYork} src={newYork} alt='' />
    </div>
  );
};

export default SubscribeLock;
