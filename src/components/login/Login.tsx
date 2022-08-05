import Styles from "./login.module.css";
import { XIcon } from "@heroicons/react/solid";
import { useEffect, useRef } from "react";

interface Props {
  setToogleLogin: (toogle: boolean) => void;
}

const Login: React.FC<Props> = ({ setToogleLogin }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className={Styles.container}>
      <XIcon onClick={() => setToogleLogin(false)} className={Styles.xIcon} />
      <form className={Styles.form} action=''>
        <label htmlFor=''>Username:</label>
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
      <p className={Styles.createAccount}>Create account?</p>
    </div>
  );
};

export default Login;
