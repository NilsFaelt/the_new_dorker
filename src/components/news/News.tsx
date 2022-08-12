import EachNews from "../eachNews/EachNews";
import PopUp from "../popUp/PopUp";
import Styles from "./news.module.css";
import newYork from "../../assets/newYork.png";

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
  return (
    <div className={Styles.outerDiv}>
      <div className={Styles.container}>
        {news?.map((news) => (
          <EachNews key={news.publishedAt} news={news} />
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
    </div>
  );
};

export default News;
