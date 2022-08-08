import Styles from "./createAccount.module.css";
import { XIcon } from "@heroicons/react/solid";
import { FormEvent, useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

interface Props {
  setToogleLogin: (toogle: boolean) => void;
  setToogleCreateAccount: (toogle: boolean) => void;
}

const CreateAccount: React.FC<Props> = ({
  setToogleCreateAccount,
  setToogleLogin,
}) => {
  const [accountCreated, setAccountCreated] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const toggleToLogin = () => {
    setToogleLogin(true);
    setToogleCreateAccount(false);
  };

  const register = async (e: FormEvent) => {
    e.preventDefault();
    if (
      email === confirmEmail &&
      password === confirmPassword &&
      password.length > 5 &&
      password.length < 15
    ) {
      setToogleCreateAccount(true);
      setToogleLogin(false);
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
      } catch (err) {
        console.log("error in creteuser", err);
      }
      setEmail("");
      setConfirmEmail("");
      setPassword("");
      setConfirmPassword("");
      setAccountCreated(false);
    } else {
      alert(
        "make sure email and password is correct, password have to be a minimun of 6 characters and maximun of 14 characters"
      );
    }
  };
  return (
    <div className={Styles.container}>
      <XIcon
        onClick={() => setToogleCreateAccount(false)}
        className={Styles.xIcon}
      />
      {accountCreated ? (
        <form className={Styles.form} action=''>
          <label htmlFor=''>Email:</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef}
            className={Styles.input}
            type='email'
            placeholder='Email'
          />
          <label htmlFor=''>Confirm Email:</label>
          <input
            required
            value={confirmEmail}
            className={Styles.input}
            type='email'
            placeholder='Confirm Email'
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          <label htmlFor=''>Password</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={Styles.input}
            type='password'
            placeholder='Password'
            minLength={6}
          />
          <label htmlFor=''>Confirm Password:</label>
          <input
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={Styles.input}
            type='password'
            placeholder='Confirm Password'
            minLength={6}
          />
          <button onClick={(e) => register(e)}>Create Account</button>
        </form>
      ) : (
        <p className={Styles.accountCreated}>
          Account created succesfully <br />
          Welcome To The New Dorker
        </p>
      )}
      <p onClick={() => toggleToLogin()} className={Styles.createAccount}>
        {" "}
        Login?
      </p>
    </div>
  );
};

export default CreateAccount;
