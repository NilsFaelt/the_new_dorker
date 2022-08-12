import React from "react";
import Styles from "./stockNews.module.css";
interface StocksNewsInterface {
  title: string;
  image_url: string;
  uuid?: string;
  published_at?: string;
  description?: string;
}

interface Props {
  stockNews: StocksNewsInterface | null;
}

const StockNews: React.FC<Props> = ({ stockNews }) => {
  return (
    <div className={Styles.container}>
      <h4>{stockNews?.title}</h4>
      <img className={Styles.img} src={stockNews?.image_url} alt='' />
      <p className={Styles.text}>{stockNews?.description}</p>
      <p className={Styles.date}>{stockNews?.published_at}</p>
    </div>
  );
};

export default StockNews;
