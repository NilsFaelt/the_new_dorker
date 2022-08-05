import Styles from "./login.module.css";
import { XIcon } from "@heroicons/react/solid";
import { useEffect, useRef } from "react";

interface Props {
  setToogleLogin: (toogle: boolean) => void;
  setToogleCreateAccount: (toogle: boolean) => void;
}

const Login: React.FC<Props> = ({ setToogleLogin, setToogleCreateAccount }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const toogleTocreateAccount = () => {
    setToogleCreateAccount(true);
    setToogleLogin(false);
  };
  return (
    <div className={Styles.container}>
      <XIcon onClick={() => setToogleLogin(false)} className={Styles.xIcon} />
      <form className={Styles.form} action=''>
        <label htmlFor=''>Username/Email:</label>
        <input
          ref={inputRef}
          className={Styles.input}
          type='text'
          placeholder='Username'
        />
        <label htmlFor=''>Password</label>
        <input className={Styles.input} type='text' placeholder='Password' />
        <button>Login</button>
      </form>
      <p
        onClick={() => toogleTocreateAccount()}
        className={Styles.createAccount}
      >
        Create account?
      </p>
    </div>
  );
};

export default Login;
