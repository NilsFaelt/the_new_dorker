import Styles from "./sellNews.module.css";

const SellNews = () => {
  return (
    <div className={Styles.container}>
      <h4> Sell your news/ stories</h4>
      <div className={Styles.textAndPicWrapper}>
        <label htmlFor=''>News Story</label>
        <textarea className={Styles.textArea}></textarea>
        <input className={Styles.fileUpload} type='file' />
      </div>
      Asking Price $
      <div>
        <input type='number' placeholder=' Price $' />
      </div>
      <label className={Styles.label} htmlFor=''>
        Email:
      </label>
      <input className={Styles.input} type='mail' placeholder='Email:' />
      <label className={Styles.label} htmlFor=''>
        Phone:
      </label>
      <input className={Styles.input} type='number' placeholder='Phone:' />
      <button>Send</button>
      <p className={Styles.text}>
        If you have urgent news, please call our 24/7 number: 0143-554-783-3
      </p>
    </div>
  );
};

export default SellNews;
