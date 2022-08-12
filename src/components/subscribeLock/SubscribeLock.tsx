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
  const login = () => {
    setToogleLogin(true);
    setToogleCreateAccount(false);
  };
  const create = () => {
    setToogleLogin(false);
    setToogleCreateAccount(true);
  };
  return (
    <div className={Styles.container}>
      <h4>
        Get free acces by Createing a <br /> account or login{" "}
      </h4>
      <div className={Styles.loginDiv}>
        <p onClick={() => login()} className={Styles.text}>
          Login?
        </p>
        <p onClick={() => create()} className={Styles.text}>
          Create Account?
        </p>
      </div>
      <img className={Styles.newYork} src={newYork} alt='' />
    </div>
  );
};

export default SubscribeLock;
