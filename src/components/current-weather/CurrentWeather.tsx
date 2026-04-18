import type { IWeather } from '../../interfaces/weather.interface';
import Input from '../input/Input';
import './CurrentWeather.css';

interface IProps {
  weather: IWeather;
}

const CurrentWeather = ({ weather }: IProps) => {
  return (
    <div className="current-weather">
      <Input />

      <img
        src="/icons/sunny.png"
        alt="Sunny"
        className="current-weather__icon"
      />
      <div className="current-weather__degree">
        <p>{Math.round(weather?.current.temp || 0)}</p>
        <p>°C</p>
      </div>
      <p className="current-weather__status">Sunny</p>

      <div className="divider" />

      <p className="current-weather__city">Bukhara</p>
    </div>
  );
};

export default CurrentWeather;
