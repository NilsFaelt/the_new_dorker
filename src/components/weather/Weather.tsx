import { FormEvent, useState } from "react";
import Styles from "./weather.module.css";
import { XIcon } from "@heroicons/react/solid";

interface Condition {
  text: string;
  icon: string;
}
interface Weather {
  condition: Condition;
  temp_c: number;
  is_day: number;
}

interface Props {
  setCity: (city: string) => void;
  city: string | null;
  weather: Weather;
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
    <div
      className={
        weather?.is_day === 1 ? Styles.container : Styles.containerNight
      }
    >
      <XIcon onClick={() => setToogleWetaher(false)} className={Styles.xIcon} />
      <form onSubmit={(e) => handleSubmit(e)} action=''>
        <input
          onChange={(e) => setGetCity(e.target.value)}
          type='text'
          placeholder='City'
          value={getCity}
        />
      </form>
      <h2 className={Styles.title}> City: {city}</h2>
      <p className={Styles.text}>Temp:{weather?.temp_c}</p>
      <div className={Styles.logoWrapper}>
        <p className={Styles.text}>{weather?.condition.text}</p>
        <img
          className={Styles.logo}
          src={weather?.condition.icon}
          alt='weatherLogo'
        />
      </div>
    </div>
  );
};

export default Weather;
