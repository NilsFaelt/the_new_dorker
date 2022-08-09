import Styles from "./contact.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mail, setMail] = useState<string>("");
  const [mailConfirmation, setMailconfirmation] = useState<string>("");
  const [confirmMail, setConfirmMail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    setMailconfirmation(mail);
    e.preventDefault();
    if (mail === confirmMail) {
      setConfirm(true);
      emailjs
        .sendForm(
          "service_760ly0a",
          "template_p4808eg",
          e.target,
          "FP-TuQEshTqFI2b5s"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMail("");
            setConfirmMail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log("sending");
    }
  };

  return (
    <div className={Styles.container}>
      <h4 style={{ marginTop: "5vh" }}>
        Contact Us At <br />
        The New Dorker
      </h4>
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
      <form onSubmit={(e) => sendEmail(e)} className={Styles.form} action=''>
        <label htmlFor=''>Message:</label>
        <textarea
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name='message'
          className={Styles.textArea}
        ></textarea>
        <label htmlFor=''>Email:</label>
        <input
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          name='message'
          type='mail'
        />
        <label htmlFor=''>Confirm Email:</label>
        <input
          required
          value={confirmMail}
          onChange={(e) => setConfirmMail(e.target.value)}
          type='mail'
        />
        <button style={{ marginTop: "3vh" }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
