import Styles from "./eachNews.module.css";

interface NewsInterFace {
  author?: string;
  content: string;
  publishedAt?: string;
  title: string;
  urlToImage: string;
  id?: number;
}

interface Props {
  news: NewsInterFace;
}

const EachNews: React.FC<Props> = ({ news }) => {
  return (
    <div className={Styles.container}>
      <h4>{news.title}</h4>
      <img className={Styles.img} src={news.urlToImage} alt='' />
      <p className={Styles.text}>{news.content}</p>
      <hr style={{ marginTop: "2vh" }} />
    </div>
  );
};

export default EachNews;
