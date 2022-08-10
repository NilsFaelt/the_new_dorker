import EachNews from "../eachNews/EachNews";
import PopUp from "../popUp/PopUp";
import Styles from "./news.module.css";

interface NewsInterFace {
  author?: string;
  content: string;
  publishedAt?: string;
  title: string;
  urlToImage: string;
  id?: number;
}
interface Props {
  news: NewsInterFace[] | null;
}

const News: React.FC<Props> = ({ news }) => {
  return (
    <div className={Styles.outerDiv}>
      <div className={Styles.container}>
        {news?.map((news) => (
          <EachNews news={news} />
        ))}
        <PopUp />
      </div>
      <div className={Styles.asideWrapper}>
        <aside className={Styles.aside}>
          <p className={Styles.ad}>Advertisment</p>
        </aside>
      </div>
    </div>
  );
};

export default News;
