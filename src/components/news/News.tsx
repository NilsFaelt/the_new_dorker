import React, { useState } from "react";
import EachNews from "../eachNews/EachNews";
import PopUp from "../popUp/PopUp";
import PopUpVideo from "../popUpVideo/PopUpVideo";
import Styles from "./news.module.css";

interface NewsInterFace {
  content: string;
  publishedAt?: string;
  title: string;
  image: string;
}
interface Props {
  news: NewsInterFace[] | null;
}

const News: React.FC<Props> = ({ news }) => {
  const [nrGen, setNrgen] = useState<number>(Math.floor(Math.random() * 3 + 1));

  console.log(news);
  return (
    <div className={Styles.outerDiv}>
      <div className={Styles.container}>
        {news?.map((news) => (
          <EachNews news={news} />
        ))}
        <PopUp />
      </div>
      <div className={Styles.asideWrapper}>
        <a href='https://burgerking.se/' target={"blank"}>
          <aside className={Styles.aside}>
            <p className={Styles.ad}>Advertisment</p>
          </aside>
        </a>
      </div>
      {nrGen === 2 ? <PopUpVideo setNrgen={setNrgen} /> : null}
    </div>
  );
};

export default News;
