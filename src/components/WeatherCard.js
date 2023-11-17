import '../blocks/WeatherCard.css';

export default function WeatherCard({ day, weather, weatherTemp = '', weatherDesc = '' }) {
  const timeOfDay = day ? 'day' : 'night';
  const weatherImage = require(`../images/${timeOfDay}-${weather}.png`);

  return (
    <section className="weather-card">
      <div className="weather-card__temperature">{weatherTemp}°F</div>

      <img src={weatherImage} alt="weather" className="weather-card__image" />
    </section>
  );
}
