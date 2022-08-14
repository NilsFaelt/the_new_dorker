import { useEffect } from "react";
import Styles from "./eachNews.module.css";

interface NewsInterFace {
  content: string;
  publishedAt?: string;
  title: string;
  image: string;
}

interface Props {
  news: NewsInterFace;
  setPopUpNews: (news: NewsInterFace) => void;
  setTooglePopUpNews: (toogle: boolean) => void;
}

const EachNews: React.FC<Props> = ({
  news,
  setPopUpNews,
  setTooglePopUpNews,
}) => {
  const zoomInNews = () => {
    setTooglePopUpNews(true);
    setPopUpNews(news);
    console.log("hej");
  };

  return (
    <div onClick={() => zoomInNews()} className={Styles.container}>
      <h4>{news.title}</h4>
      <img className={Styles.img} src={news.image} alt='' />
      <p className={Styles.text}>{news.content}</p>
      <hr style={{ marginTop: "2vh" }} />
    </div>
  );
};

export default EachNews;
