import Styles from "./zommedInNews.module.css";
import { XIcon } from "@heroicons/react/solid";

interface NewsInterFace {
  content: string;
  publishedAt?: string;
  title: string;
  image: string;
}
interface Props {
  popUpNews: NewsInterFace | null;
  setTooglePopUpNews: (toogle: boolean) => void;
}

const ZommedInNews: React.FC<Props> = ({ popUpNews, setTooglePopUpNews }) => {
  return (
    <div className={Styles.container}>
      <h4 className={Styles.title}>{popUpNews?.title}</h4>
      <img className={Styles.img} src={popUpNews?.image} alt='' />
      <p className={Styles.text}>
        {popUpNews?.content} Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Soluta, quis eveniet! Inventore voluptate, eius nobis tenetur
        magni earum aliquid adipisci veritatis fuga atque, cupiditate quaerat
        modi dolorem, impedit suscipit quia. Distinctio, excepturi eveniet odit
        tempora eligendi sapiente aspernatur sint illum laborum laudantium
        laboriosam dolore nobis! Cumque placeat sit corrupti iste asperiores
        provident facilis quos enim laboriosam labore. Ipsa, nemo distinctio! At
        earum nihil id accusamus voluptate necessitatibus inventore, ratione
        laboriosam in fugiat et. Nostrum, recusandae! Rerum at recusandae
        explicabo enim nesciunt sequi magni? Ad consequuntur dolorem quidem
        fugit, minima culpa! A nesciunt explicabo id ipsa perferendis ad.
        Dolorem earum nam voluptatibus facilis fugit. Omnis obcaecati eligendi
        molestiae repudiandae voluptas labore fuga veniam! Accusamus nostrum
        atque earum pariatur exercitationem nesciunt sint! Culpa provident enim
        sunt officiis deserunt doloribus esse asperiores vitae qui, itaque
        beatae placeat tempore numquam fuga quasi minus quibusdam neque. Numquam
        asperiores molestiae doloribus voluptas possimus enim animi. Laboriosam
        elit. Soluta, quis eveniet! Inventore voluptate, eius nobis tenetur
        magni earum aliquid adipisci veritatis fuga atque, cupiditate quaerat
        modi dolorem, impedit suscipit quia. Distinctio, excepturi eveniet odit
        tempora eligendi sapiente aspernatur sint illum laborum laudantium
        laboriosam dolore nobis! Cumque placeat sit corrupti iste asperiores
        provident facilis quos enim laboriosam labore. Ipsa, nemo distinctio! At
        earum nihil id accusamus voluptate necessitatibus inventore, ratione
        laboriosam in fugiat et. Nostrum, recusandae! Rerum at recusandae
        explicabo enim nesciunt sequi magni? Ad consequuntur dolorem quidem
        fugit, minima culpa! A nesciunt explicabo id ipsa perferendis ad.
        Dolorem earum nam voluptatibus facilis fugit. Omnis obcaecati eligendi
        molestiae repudiandae voluptas labore fuga veniam! Accusamus nostrum
        atque earum pariatur exercitationem nesciunt sint! Culpa provident enim
        sunt officiis deserunt doloribus esse asperiores vitae qui, itaque
        beatae placeat tempore numquam fuga quasi minus quibusdam neque. Numquam
        asperiores molestiae doloribus voluptas possimus enim animi. Laboriosam?
      </p>
      <XIcon
        className={Styles.xIcon}
        onClick={() => setTooglePopUpNews(false)}
      />
      <p className={Styles.published}>{popUpNews?.publishedAt}</p>
    </div>
  );
};

export default ZommedInNews;
