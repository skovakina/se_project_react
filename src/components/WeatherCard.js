import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { useContext } from 'react';
import '../blocks/WeatherCard.css';

export default function WeatherCard({ day, weather, weatherTemp = '', weatherDesc = '' }) {
  const timeOfDay = day ? 'day' : 'night';
  const weatherImage = require(`../images/${timeOfDay}-${weather}.png`);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <div className="weather-card__temperature">
        {weatherTemp}°{currentTemperatureUnit}
      </div>

      <img src={weatherImage} alt="weather" className="weather-card__image" />
    </section>
  );
}
