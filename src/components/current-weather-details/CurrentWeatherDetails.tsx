import { CurrentWeatherDetailsCard } from './card/card';
import './CurrentWeatherDetails.css';

const CurrentWeatherDetails = () => {
  return (
    <div className="current-weather__details">
      <CurrentWeatherDetailsCard type="Wind" value="6 km/h" />
      <CurrentWeatherDetailsCard type="Humidity" value="69%" />
      <CurrentWeatherDetailsCard type="Real Feel" value="31°C" />
    </div>
  );
};

export default CurrentWeatherDetails;
