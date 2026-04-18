import Input from '../input/Input';
import './CurrentWeather.css';

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <Input />

      <img
        src="/icons/sunny.png"
        alt="Sunny"
        className="current-weather__icon"
      />
      <div className="current-weather__degree">
        <p>31</p>
        <p>°C</p>
      </div>
      <p className="current-weather__status">Sunny</p>

      <div className="divider" />

      <p className="current-weather__city">Tashkent</p>
    </div>
  );
};

export default CurrentWeather;
