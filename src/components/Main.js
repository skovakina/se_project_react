import '../blocks/Main.css';
import ItemCard from './ItemCard';
import defaultClothingItems from '../utils/constants';
import { useMemo, useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../context/CurrentTemperatureUnitContext';

export default function Main({ weatherTemp = '', onSelectCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherType = useMemo(() => {
    if (weatherTemp.F >= 86) {
      return 'hot';
    } else if (weatherTemp.F >= 66 && weatherTemp.F <= 85) {
      return 'warm';
    } else if (weatherTemp.F <= 65) {
      return 'cold';
    }
  }, [weatherTemp.F]);

  const filterCards = defaultClothingItems.filter((card) => {
    return card.weather.toLocaleLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <h1 className="main__header">
        Today is {currentTemperatureUnit === 'F' ? weatherTemp.F : weatherTemp.C}°{currentTemperatureUnit}/ You may want to wear:
      </h1>
      <ul className="main__cards-list">
        {filterCards.map((card) => {
          return <ItemCard key={card._id} onSelectCard={onSelectCard} card={card} />;
        })}
      </ul>
    </main>
  );
}
