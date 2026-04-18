import type { IWeather } from '../interfaces/weather.interface';

const API_KEY = import.meta.env.VITE_API_KEY;

const getWeather = async (city: string): Promise<IWeather> => {
  const getCityInfoRes = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );

  const cityInfo = await getCityInfoRes.json();
  const lat = cityInfo[0].lat;
  const lon = cityInfo[0].lon;

  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();

  return data;
};

export default getWeather;
