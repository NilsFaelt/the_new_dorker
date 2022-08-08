import { FormEvent, useState } from "react";
import Styles from "./sellNews.module.css";

const SellNews = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  console.log(uploadedFile);
  return (
    <div className={Styles.container}>
      <h4> Sell your news/ stories</h4>
      <form className={Styles.textAndPicWrapper}>
        <label htmlFor=''>News Story</label>
        <textarea className={Styles.textArea}></textarea>
        <input className={Styles.fileUpload} type='file' />
      </form>
      Asking Price $
      <div>
        <input type='number' placeholder=' Price $' />
      </div>
      <label className={Styles.label} htmlFor=''>
        Email:
      </label>
      <form className={Styles.textAndPicWrapper} action=''>
        <input
          required
          className={Styles.input}
          type='mail'
          placeholder='Email:'
        />
        <label className={Styles.label} htmlFor=''>
          Phone:
        </label>
        <input
          required
          className={Styles.input}
          type='number'
          placeholder='Phone:'
        />
        <button>Send</button>
      </form>
      <p className={Styles.text}>
        If you have urgent news, please call our 24/7 number: 0143-554-783-3
      </p>
    </div>
  );
};

export default SellNews;
