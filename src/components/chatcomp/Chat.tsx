import { FormEvent, useEffect, useRef, useState } from "react";
import Styles from "./chat.module.css";
import { XIcon } from "@heroicons/react/solid";
import { auth } from "../../firebase-config";

interface Props {
  setToogleChat: (toogle: boolean) => void;
}

const Chat: React.FC<Props> = ({ setToogleChat }) => {
  const [userEmail, setUserEmail] = useState(
    auth.currentUser?.email ? auth.currentUser?.email : "me"
  );

  const [startTexting, setstartTexting] = useState<boolean>(false);
  const [sentMessage, setsentMessage] = useState<string[]>([
    "Correspondant: Hello how can i help you ?",
  ]);
  const [message, setMessage] = useState<string>("");
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setsentMessage([...sentMessage, userEmail + ": " + message]);
    setstartTexting(true);
    setMessage("");
  };

  if (startTexting) {
    setTimeout(() => {
      setsentMessage([
        ...sentMessage,
        "Correspondant: Sorry i didnt understand you question",
      ]);
      setstartTexting(false);
    }, 3500);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={Styles.container}>
      <XIcon onClick={() => setToogleChat(false)} className={Styles.xIcon} />
      <div className={Styles.textOutput}>
        {sentMessage.map((message) => {
          return <p className={Styles.text}>{message}</p>;
        })}
        {startTexting ? (
          <p style={{ marginTop: "1vh" }}>Corespondant writing...</p>
        ) : null}
      </div>
      <form onSubmit={(e) => handleClick(e)} className={Styles.form}>
        <input
          ref={inputRef}
          required
          placeholder='Text Message'
          onChange={(e) => setMessage(e.target.value)}
          type='text'
          value={message}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
