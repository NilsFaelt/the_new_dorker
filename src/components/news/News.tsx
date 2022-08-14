import React, { useState } from "react";
import EachNews from "../eachNews/EachNews";
import PopUp from "../popUp/PopUp";
import PopUpVideo from "../popUpVideo/PopUpVideo";
import ZommedInNews from "../zoomedInNews/ZommedInNews";
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
  const [nrGen, setNrgen] = useState<number>(Math.floor(Math.random() * 2 + 1));
  const [popUpNews, setPopUpNews] = useState<NewsInterFace | null>(null);
  const [tooglePopUpNews, setTooglePopUpNews] = useState<boolean>(false);

  console.log(popUpNews);
  return (
    <div className={Styles.outerDiv}>
      <div className={Styles.container}>
        {news?.map((news) => (
          <EachNews
            setTooglePopUpNews={setTooglePopUpNews}
            setPopUpNews={setPopUpNews}
            key={news.title}
            news={news}
          />
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
      {tooglePopUpNews ? (
        <ZommedInNews
          setTooglePopUpNews={setTooglePopUpNews}
          popUpNews={popUpNews}
        />
      ) : null}
    </div>
  );
};

export default News;
