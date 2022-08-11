import { useState } from "react";
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
  const [toogle, setToogle] = useState<boolean>(true);
  console.log(stockGainers);
  return (
    <div>
      <nav className={Styles.nav}>
        <ul className={Styles.ul}>
          <li onClick={() => setToogle(true)}>Top 100</li>
          <li onClick={() => setToogle(false)}>Todays News</li>
        </ul>
        <hr />
      </nav>
      <div className={Styles.container}>
        <PopUp />
        {toogle ? (
          <div className={Styles.stockContainer}>
            {stocks?.map((stock) => (
              <Stock stock={stock} />
            ))}
          </div>
        ) : null}
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
    </div>
  );
};

export default Finnance;
