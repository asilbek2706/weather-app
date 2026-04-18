import './App.css';
import CurrentWeatherDetails from './components/current-weather-details/CurrentWeatherDetails';
import CurrentWeather from './components/current-weather/CurrentWeather';

function App() {
  return (
    <div className="container main">
      {/* Current Weather */}
      <CurrentWeather />

      {/* Current weather details */}
      <CurrentWeatherDetails />
    </div>
  );
}

export default App;
