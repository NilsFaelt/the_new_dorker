import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./footer.module.css";

interface Props {
  setToogleChat: (toogle: boolean) => void;
  setToogleWetaher: (toogle: boolean) => void;
  subscribeRef: any;
}

const Footer: React.FC<Props> = ({
  setToogleChat,
  subscribeRef,
  setToogleWetaher,
}) => {
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
        <Link className={Styles.link} to={"/"}>
          <h2 className={Styles.title}>
            The <br />
            New <br />
            Dorker
          </h2>
        </Link>
      </div>
      <div>
        <div className={Styles.divTwo}>
          <div>
            <Link className={Styles.link} to={"/about"}>
              <p>About</p>
            </Link>
            <Link className={Styles.link} to={"/contact"}>
              <p>Contact</p>
            </Link>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => setToogleChat(true)}
            >
              Chat
            </p>
            <Link to={"/sellnews"} className={Styles.link}>
              <p>Sell your stories</p>
            </Link>
          </div>
          <div>
            <Link className={Styles.link} to={"/"}>
              <p>News</p>
            </Link>
            <p
              onClick={() => setToogleWetaher(true)}
              style={{ cursor: "pointer" }}
            >
              Weather
            </p>
            <Link className={Styles.link} to={"/finnance"}>
              <p>Finnance</p>
            </Link>
            <Link className={Styles.link} to={"/livenews"}>
              <p>Live News</p>
            </Link>
          </div>
        </div>
        <p className={Styles.copy}>Copywright ® 2022</p>
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
            ref={subscribeRef}
          />
          <button
            style={{ alignSelf: "auto", marginTop: "0.7vh" }}
            className={Styles.btn}
          >
            Subscribe
          </button>
        </form>
      </div>
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
    </footer>
  );
};

export default Footer;
