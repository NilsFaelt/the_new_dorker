import { FormEvent, useState } from "react";
import Styles from "./footer.module.css";

const Footer = () => {
  const [subcribe, setSubscribe] = useState<boolean>(false);
  const [mail, setMail] = useState<string>("");
  const [mailP, setMailP] = useState<string>("");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribe(true);
    setMailP(mail);
    setMail("");
  };
  return (
    <footer className={Styles.container}>
      <div className={Styles.divOne}>
        <h2 className={Styles.title}>
          The <br />
          New <br />
          Dorker
        </h2>
      </div>
      <div className={Styles.divTwo}>
        <div>
          <p>About</p>
          <p>Contact</p>
          <p>Chat</p>
          <p>Share</p>
        </div>
        <div>
          <p>News</p>
          <p>Weather</p>
          <p>Finnance</p>
          <p>Sport</p>
        </div>
      </div>
      <div className={Styles.divThree}>
        <form
          onSubmit={(e) => subscribe(e)}
          className={Styles.subScribeForm}
          action=''
        >
          <label htmlFor=''>NewsLetter</label>
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className={Styles.input}
            required
            type='email'
            placeholder='Email:'
          />
          <button
            style={{ alignSelf: "auto", marginTop: "0.5vh" }}
            className={Styles.btn}
          >
            Subscribe
          </button>
        </form>
        {subcribe ? (
          <div
            onClick={() => setSubscribe(false)}
            className={Styles.confirmSubscribe}
          >
            <h3>Thanks For Your subscription</h3>
            <p>
              Newletters will be sent to:
              <span className={Styles.mail}> {mailP}</span>
            </p>
            <p>
              {" "}
              Best regards/ <br />
            </p>
            <p className={Styles.subscribeTitle}>The New Dorker</p>
          </div>
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
