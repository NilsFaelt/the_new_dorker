import PopUp from "../popUp/PopUp";
import Stock from "../stock/Stock";
import Styles from "./finnance.module.css";

interface StockGainersInterface {
  name: string;
  symbol: string;
  price: number;
  changesPercentage: number;
}
interface StocksInterface {
  companyName: string;
  country?: string;
  exchangeShortName?: string;
  marketCap?: number;
  price: number;
  symbol: string;
  sector: string;
}

interface Props {
  stockGainers: StockGainersInterface[] | null;
  stocks: StocksInterface[] | null;
}

const Finnance: React.FC<Props> = ({ stockGainers, stocks }) => {
  console.log(stockGainers);
  return (
    <div className={Styles.container}>
      <PopUp />
      <div className={Styles.stockContainer}>
        {stocks?.map((stock) => (
          <Stock stock={stock} />
        ))}
      </div>
      <aside className={Styles.aside}>
        <h3 className={Styles.gainsTitle}>Todays Gainers</h3>
        {stockGainers?.map((stock) => {
          return (
            <div className={Styles.gainersDiv}>
              <p style={{ textDecoration: "underline" }}>
                Ticker:{stock.symbol}
              </p>
              <p style={{ fontFamily: "Cinzel, serif" }}>{stock.name}</p>
              <p style={{ color: "green" }}>{stock.price} $</p>
              <p style={{ color: "green" }}>{stock.changesPercentage} %</p>
              <hr />
            </div>
          );
        })}
      </aside>
    </div>
  );
};

export default Finnance;
