import ItemCard from './ItemCard';
import WeatherCard from './WeatherCard';
import { useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import '../blocks/Main.css';

export default function Main({ weatherTemp = '', onSelectCard, clothingItems, weather, handleCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (weatherTemp.F >= 86) {
      return 'hot';
    } else if (weatherTemp.F >= 66 && weatherTemp.F <= 85) {
      return 'warm';
    } else if (weatherTemp.F <= 65) {
      return 'cold';
    }
  };

  const weatherType = getWeatherType();

  const filterCards = clothingItems.filter((card) => {
    return card.weather.toLocaleLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} weather="cloudy" weatherTemp={currentTemperatureUnit === 'F' ? weatherTemp.F : weatherTemp.C} weatherDesc={weather} />
      <h1 className="main__header">
        Today is {currentTemperatureUnit === 'F' ? weatherTemp.F : weatherTemp.C}°{currentTemperatureUnit}/ You may want to wear:
      </h1>
      <ul className="cards-list main__cards-list">
        {filterCards.map((card) => {
          return <ItemCard key={card._id} onSelectCard={onSelectCard} card={card} handleCardLike={handleCardLike} />;
        })}
      </ul>
    </main>
  );
}
