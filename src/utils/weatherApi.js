// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
import checkResponse from './utils';

const APIkey = '8e9b6c701c1c48737f12e387a8724a0c';
const lat = 33.44;
const lon = -94.04;

export function getWeather() {
  const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`).then((res) =>
    checkResponse(res)
  );
  return weatherApi;
}

export function parseWeatherData(data) {
  const temperature = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  return temperature;
}
