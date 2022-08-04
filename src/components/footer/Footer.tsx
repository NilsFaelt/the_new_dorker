import Styles from "./footer.module.css";

const Footer = () => {
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
        <form className={Styles.subScribeForm} action=''>
          <label htmlFor=''>NewsLetter</label>
          <input
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
      </div>
    </footer>
  );
};

export default Footer;
