import { FormEvent, useState } from "react";
import Styles from "./chat.module.css";
import { XIcon } from "@heroicons/react/solid";

interface Props {
  setToogleChat: (toogle: boolean) => void;
}

const Chat: React.FC<Props> = ({ setToogleChat }) => {
  const [startTexting, setstartTexting] = useState(false);
  const [sentMessage, setsentMessage] = useState<string[]>([
    "Hello how can i help you ?",
  ]);
  const [message, setMessage] = useState<string>("");
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setsentMessage([...sentMessage, message]);
    setstartTexting(true);
    setMessage("");
  };

  if (startTexting) {
    setTimeout(() => {
      setsentMessage([...sentMessage, "Sorry i didnt understand you question"]);
      setstartTexting(false);
    }, 3500);
  }

  return (
    <div className={Styles.container}>
      <XIcon onClick={() => setToogleChat(false)} className={Styles.xIcon} />
      <div className={Styles.textOutput}>
        {sentMessage.map((message) => {
          return <p className={Styles.text}>{message}</p>;
        })}
        {startTexting ? <p>Corespondant writing...</p> : null}
      </div>
      <form className={Styles.form}>
        <input
          placeholder='Text Message'
          onChange={(e) => setMessage(e.target.value)}
          type='text'
          value={message}
        />
        <button onClick={(e) => handleClick(e)}>Send</button>
      </form>
    </div>
  );
};

export default Chat;
