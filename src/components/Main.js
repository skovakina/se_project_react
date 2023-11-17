import '../blocks/Main.css';
import ItemCard from './ItemCard';
import defaultClothingItems from '../utils/constants';
import { useMemo } from 'react';

export default function Main({ weatherTemp = '', onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return 'hot';
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return 'warm';
    } else if (weatherTemp <= 65) {
      return 'cold';
    }
  }, [weatherTemp]);

  const filterCards = defaultClothingItems.filter((card) => {
    return card.weather.toLocaleLowerCase() === weatherType;
  });

  return (
    <div className="main">
      <h1 className="main__header">Today is {weatherTemp} F / You may want to wear:</h1>
      <ul className="main__cards-list">
        {filterCards.map((card) => {
          return <ItemCard key={card._id} onSelectCard={onSelectCard} card={card} />;
        })}
      </ul>
    </div>
  );
}
