// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const APIkey = '689067eb0476d44549cf63777eeec326';
const lat = 20;
const lon = 20;

export default function getWeather() {
  const weatherApi = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error ` + res.status);
    }
  });
  return weatherApi;
}
