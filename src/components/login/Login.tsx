import Styles from "./login.module.css";
import { XIcon } from "@heroicons/react/solid";
import { FormEvent, useEffect, useRef, useState } from "react";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { CogIcon } from "@heroicons/react/outline";

interface Props {
  setToogleLogin: (toogle: boolean) => void;
  setToogleCreateAccount: (toogle: boolean) => void;
  loggedIn: string | null;
  setLoggedin: (loggedIn: string | null) => void;
}

const Login: React.FC<Props> = ({
  setToogleLogin,
  setToogleCreateAccount,
  loggedIn,
  setLoggedin,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toogleSettings, setToogleSettings] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const toogleTocreateAccount = () => {
    setToogleCreateAccount(true);
    setToogleLogin(false);
  };
  const login = async (e: FormEvent) => {
    e.preventDefault();
    if (email && password) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        console.log(user);
      } catch (err) {
        console.log("error in sign in", err);
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
    setLoggedin(null);
    setToogleCreateAccount(false);
    setToogleLogin(false);
  };
  useEffect(() => {
    try {
      if (auth.currentUser?.email) {
        setLoggedin(auth.currentUser.email);
      }
    } catch (err) {
      console.log(err);
    }
    return;
  }, [logout]);

  console.log(toogleSettings);
  return (
    <div className={Styles.container}>
      <XIcon onClick={() => setToogleLogin(false)} className={Styles.xIcon} />
      {!loggedIn ? (
        <form onSubmit={login} className={Styles.form} action=''>
          <h4>The New Dorker</h4>
          <label htmlFor=''>Username/Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef}
            className={Styles.input}
            type='email'
            placeholder='Email'
            required
          />
          <label htmlFor=''>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={Styles.input}
            type='password'
            placeholder='Password'
            required
          />
          <button>Login</button>
        </form>
      ) : (
        <p>
          Logedin as: <br /> {loggedIn}
        </p>
      )}
      {!loggedIn ? (
        <p
          onClick={() => toogleTocreateAccount()}
          className={Styles.createAccount}
        >
          Create account?
        </p>
      ) : (
        <div>
          <button onClick={() => logout()}>Logout</button>
          <CogIcon
            onClick={() => setToogleSettings(!toogleSettings)}
            className={Styles.cog}
          />
        </div>
      )}
      {toogleSettings ? (
        <span className={Styles.settingsSpan}>
          <hr className={Styles.hr} />
          <p>Settings</p>
          <div className={Styles.applySettingsDiv}>
            <div className={Styles.singleSetting}>
              <p>Allow cookies</p>
              <input style={{ cursor: "pointer" }} type='checkbox' />
            </div>
            <div className={Styles.singleSetting}>
              <p>Stay logedin</p>
              <input style={{ cursor: "pointer" }} type='checkbox' />
            </div>
            <div className={Styles.singleSetting}>
              <p>Sound on</p>
              <input style={{ cursor: "pointer" }} type='checkbox' />
            </div>
          </div>
        </span>
      ) : null}
    </div>
  );
};

export default Login;
