import Styles from "./createAccount.module.css";
import { XIcon } from "@heroicons/react/solid";
import { useEffect, useRef } from "react";

interface Props {
  setToogleLogin: (toogle: boolean) => void;
  setToogleCreateAccount: (toogle: boolean) => void;
}

const CreateAccount: React.FC<Props> = ({
  setToogleCreateAccount,
  setToogleLogin,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const toggleToLogin = () => {
    setToogleLogin(true);
    setToogleCreateAccount(false);
  };
  return (
    <div className={Styles.container}>
      <XIcon
        onClick={() => setToogleCreateAccount(false)}
        className={Styles.xIcon}
      />
      <form className={Styles.form} action=''>
        <label htmlFor=''>Email:</label>
        <input
          ref={inputRef}
          className={Styles.input}
          type='text'
          placeholder='Username'
        />
        <label htmlFor=''>Confirm Email:</label>
        <input className={Styles.input} type='text' placeholder='Username' />
        <label htmlFor=''>Password</label>
        <input className={Styles.input} type='text' placeholder='Password' />
        <label htmlFor=''>Confirm Password:</label>
        <input className={Styles.input} type='text' placeholder='Password' />
        <button>Create Account</button>
      </form>
      <p onClick={() => toggleToLogin()} className={Styles.createAccount}>
        {" "}
        Login?
      </p>
    </div>
  );
};

export default CreateAccount;
