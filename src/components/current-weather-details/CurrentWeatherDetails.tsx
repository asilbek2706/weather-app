import type { IWeather } from '../../interfaces/weather.interface';
import { CurrentWeatherDetailsCard } from './card/card';
import './CurrentWeatherDetails.css';

interface IProps {
  weather: IWeather;
}

const CurrentWeatherDetails = ({ weather }: IProps) => {
  return (
    <div className="current-weather__details">
      <CurrentWeatherDetailsCard
        type="Wind"
        value={`${weather?.current.wind_speed.toString()} km/h`}
      />
      <CurrentWeatherDetailsCard
        type="Humidity"
        value={`${weather?.current.humidity.toString()}%`}
      />
      <CurrentWeatherDetailsCard
        type="Real Feel"
        value={`${weather?.current.feels_like.toString()}°C`}
      />
    </div>
  );
};

export default CurrentWeatherDetails;
