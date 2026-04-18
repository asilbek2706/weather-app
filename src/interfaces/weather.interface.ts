export interface IWeather {
  current: {
    feels_like: number;
    temp: number;
    humidity: number;
    wind_speed: number;
  };
}
