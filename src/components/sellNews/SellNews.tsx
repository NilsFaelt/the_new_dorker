import { FormEvent, useEffect, useState } from "react";
import Styles from "./sellNews.module.css";
import emailjs from "emailjs-com";
import { auth } from "../../firebase-config";

const SellNews = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const [mail, setMail] = useState<string>("");
  const [mailConfirmation, setMailconfirmation] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);
  const [myEmail, setMyEmail] = useState<string | null>(null);

  const sendEmail = (e: any) => {
    setMailconfirmation(mail);
    e.preventDefault();
    if (mail === confirmEmail) {
      setConfirm(true);
      emailjs
        .sendForm(
          "service_760ly0a",
          "template_3log76x",
          e.target,
          "FP-TuQEshTqFI2b5s"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMail("");
            setConfirmEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log("sending");
    }
  };

  useEffect(() => {
    if (auth.currentUser?.email) {
      setMyEmail(auth.currentUser.email);
    }
  }, []);

  const prefilMailOnClick = () => {
    if (myEmail) {
      setMail(myEmail);
      setConfirmEmail(myEmail);
    }
  };

  console.log(uploadedFile);
  return (
    <div className={Styles.container}>
      <form onSubmit={(e) => sendEmail(e)} action=''>
        <h4> Sell your news/ stories</h4>
        {confirm ? (
          <div
            onClick={() => setConfirm(false)}
            className={Styles.outerDivConfirm}
          >
            <div className={Styles.divConfirm}>
              <p>Thansk For Your Mail</p>
              <p>
                We will get back to you at mail: <br /> {mailConfirmation}
              </p>
            </div>
          </div>
        ) : null}
        <div className={Styles.textAndPicWrapper}>
          <label htmlFor=''>News Story and asking price$</label>
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name='message'
            className={Styles.textArea}
          ></textarea>
          <p style={{ marginTop: "3vh" }}>Max FileSize 50kb</p>
          <input name='file' className={Styles.fileUpload} type='file' />
        </div>
        <div className={Styles.textAndPicWrapper}>
          {myEmail ? (
            <p onClick={() => prefilMailOnClick()} className={Styles.useMail}>
              Use: {myEmail}
            </p>
          ) : null}
          <label className={Styles.label} htmlFor=''>
            Email:
          </label>
          <input
            onChange={(e) => setMail(e.target.value)}
            name='message'
            required
            className={Styles.input}
            value={mail}
            type='mail'
            placeholder='Email:'
          />
          <label className={Styles.label} htmlFor=''>
            Confirm Email:
          </label>
          <input
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
            className={Styles.input}
            value={confirmEmail}
            type='mail'
            placeholder='Email:'
          />
          <button>Send</button>
        </div>
        <p className={Styles.text}>
          If you have urgent news, please call our 24/7 number: 0143-554-783-3
        </p>
      </form>
    </div>
  );
};

export default SellNews;
