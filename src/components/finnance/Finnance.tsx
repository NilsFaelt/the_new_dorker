import { FormEvent, useEffect, useState } from "react";
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
  const [ticker, setTicker] = useState("");
  const [filteredStocks, setFilteredStocks] = useState<
    StocksInterface[] | null
  >(null);

  const searchForTicker = (e: FormEvent) => {
    e.preventDefault();
    const filteredStocks = stocks?.filter((stocks) =>
      stocks.companyName.toUpperCase().includes(ticker.toUpperCase())
    );

    if (ticker === "") {
      setFilteredStocks(stocks);
    } else if (ticker !== "" && filteredStocks) {
      setFilteredStocks(filteredStocks);
    }
    setTicker("");
    console.log(filteredStocks, "testing");
  };
  useEffect(() => {
    setFilteredStocks(stocks);
    const filteredStocks = stocks?.filter((stocks) =>
      stocks.companyName.toUpperCase().includes(ticker.toUpperCase())
    );

    if (ticker === "") {
      setFilteredStocks(stocks);
    } else if (ticker !== "" && filteredStocks) {
      setFilteredStocks(filteredStocks);
    }

    console.log(filteredStocks, "testing");
  }, [ticker]);

  return (
    <div>
      <nav className={Styles.nav}>
        <ul className={Styles.ul}>
          <li onClick={() => setToogle(true)}>Top 100</li>
          <li onClick={() => setToogle(false)}>Todays News</li>
        </ul>
        <hr />
      </nav>
      <form className={Styles.form} action=''>
        <label htmlFor=''>
          Search for comapny name or part of comapany name
        </label>
        <input
          onChange={(e) => setTicker(e.target.value)}
          type='text'
          placeholder='Company name or part of'
          value={ticker}
        />
      </form>

      <div className={Styles.container}>
        <PopUp />
        {toogle ? (
          <div className={Styles.stockContainer}>
            {filteredStocks?.map((stock) => (
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
