import Styles from "./stock.module.css";

interface StockInterface {
  companyName: string;
  country?: string;
  exchangeShortName?: string;
  marketCap?: number;
  price: number;
  symbol: string;
  sector: string;
}
interface Props {
  stock: StockInterface;
}

const Stock: React.FC<Props> = ({ stock }) => {
  return (
    <a
      target={"blank"}
      className={Styles.link}
      href={`https://finance.yahoo.com/quote/${stock?.symbol}?p=&.tsrc=fin-srch`}
    >
      <div className={Styles.container}>
        <div className={Styles.innerDiv}>
          <h3 className={Styles.title}>
            {stock.companyName} ({stock.symbol})
          </h3>
          <p>{stock.country}</p>
          <p>Price: {stock.price}$</p>
          <p>Marketcap: {stock.marketCap} $</p>
        </div>
        <div className={Styles.innerDiv}>
          <p>Exchange: {stock.exchangeShortName}</p>
          <p>Sector: {stock.sector}</p>
        </div>
      </div>
    </a>
  );
};

export default Stock;
