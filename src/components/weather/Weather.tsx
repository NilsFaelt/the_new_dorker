import Styles from "./weather.module.css";

interface Condition {
  text: string;
  icon: string;
}
interface Weather {
  condition: Condition;
  temp_c: number;
}

interface Props {
  setCity: (city: string) => void;
  city: string | null;
  weather: Weather;
}

const Weather: React.FC<Props> = ({ weather, city, setCity }) => {
  return (
    <div className={Styles.container}>
      <form action=''>
        <input
          onChange={(e) => setCity(e.target.value)}
          type='text'
          placeholder='City'
        />
      </form>
      <h2 className={Styles.title}> City: {city}</h2>
      <p>temp:{weather?.temp_c}</p>
      <p>{weather?.condition.text}</p>
      <img className={Styles.logo} src={weather?.condition.icon} alt='' />
    </div>
  );
};

export default Weather;
