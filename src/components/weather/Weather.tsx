import { FormEvent, useState } from "react";
import Styles from "./weather.module.css";
import { XIcon } from "@heroicons/react/solid";

interface WeatherApi {
  conditions: string;
  temp: number;
  icon: string;
  datetime?: string;
  sunrise?: string;
  sunset?: string;
}

interface Props {
  setCity: (city: string) => void;
  city: string | null;
  weather: WeatherApi | null;
  setToogleWetaher: (change: boolean) => void;
}

const Weather: React.FC<Props> = ({
  weather,
  city,
  setCity,
  setToogleWetaher,
}) => {
  const [getCity, setGetCity] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCity(getCity);
    setGetCity("");
  };
  return (
    <div className={weather ? Styles.container : Styles.containerNight}>
      <XIcon onClick={() => setToogleWetaher(false)} className={Styles.xIcon} />
      <div className={Styles.infoContainer}>
        <form onSubmit={(e) => handleSubmit(e)} action=''>
          <input
            onChange={(e) => setGetCity(e.target.value)}
            type='text'
            placeholder='City'
            value={getCity}
          />
        </form>
        <div className={Styles.textInnerInfoContainer}>
          <h2 className={Styles.title}> City: {city}</h2>
          <p className={Styles.text}>Temp:{weather?.temp} °F</p>
          <p className={Styles.text}>Date n Time:{weather?.datetime} </p>
          <p className={Styles.text}>{weather?.conditions}</p>
          <div className={Styles.suntime}>
            <p className={Styles.text}>Sunrise: {weather?.sunrise}</p>
            <p className={Styles.text}>Sunset: {weather?.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
