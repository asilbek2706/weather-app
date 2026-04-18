import type { Dispatch, SetStateAction } from 'react';
import type { IWeather } from '../../interfaces/weather.interface';
import Input from '../input/Input';
import './CurrentWeather.css';

interface IProps {
  weather: IWeather;
  value: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  getCurrentWeather: () => Promise<void>;
  selectedCity: string;
}

const CurrentWeather = ({
  weather,
  setInputValue,
  value,
  getCurrentWeather,
  selectedCity,
}: IProps) => {
  return (
    <div className="current-weather">
      <Input
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
        getCurrentWeather={getCurrentWeather}
      />

      <img
        src="/icons/sunny.png"
        alt="Sunny"
        className="current-weather__icon"
      />
      <div className="current-weather__degree">
        <p>{Math.round(weather?.current.temp || 0)}</p>
        <p>°C</p>
      </div>

      <div className="divider" />

      <p className="current-weather__city">{selectedCity}</p>
    </div>
  );
};

export default CurrentWeather;
