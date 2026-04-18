import { useEffect, useState } from 'react';
import './App.css';
import CurrentWeatherDetails from './components/current-weather-details/CurrentWeatherDetails';
import CurrentWeather from './components/current-weather/CurrentWeather';
import getWeather from './api/getWeather';
import type { IWeather } from './interfaces/weather.interface';
import Loader from './components/loader/Loader';

function App() {
  const [weather, setWeather] = useState<IWeather | null>(null),
    [inputValue, setInputValue] = useState<string>('Bukhara'),
    [selectedCity, setSelectedCity] = useState<string>(inputValue);

  const getCurrentWeather = async () => {
    const data = await getWeather(inputValue);
    setWeather(data);
    setSelectedCity(inputValue);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  if (!weather) {
    return <Loader />;
  }
  return (
    <div className="container main">
      {/* Current Weather */}
      <CurrentWeather
        weather={weather}
        value={inputValue}
        setInputValue={setInputValue}
        getCurrentWeather={getCurrentWeather}
        selectedCity={selectedCity}
      />

      {/* Current weather details */}
      <CurrentWeatherDetails weather={weather} />
    </div>
  );
}

export default App;
