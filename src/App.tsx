import { useEffect, useState } from 'react';
import './App.css';
import CurrentWeatherDetails from './components/current-weather-details/CurrentWeatherDetails';
import CurrentWeather from './components/current-weather/CurrentWeather';
import getWeather from './api/getWeather';
import type { IWeather } from './interfaces/weather.interface';

function App() {
  const [weather, setWeather] = useState<IWeather | null>(null);

  const getCurrentWeather = async () => {
    const data = await getWeather('Bukhara');
    setWeather(data);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  if (!weather) {
    return null;
  }
  return (
    <div className="container main">
      {/* Current Weather */}
      <CurrentWeather weather={weather} />

      {/* Current weather details */}
      <CurrentWeatherDetails weather={weather} />
    </div>
  );
}

export default App;
