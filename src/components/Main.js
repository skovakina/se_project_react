import '../blocks/Main.css';
import ItemCard from './ItemCard';
import defaultClothingItems from '../utils/constants';

export default function Main({ weatherTemp = '', onSelectCard }) {
  return (
    <div className="main">
      <h1 className="main__header">Today is {weatherTemp} F / You may want to wear:</h1>
      <ul className="main__cards-list">
        {defaultClothingItems.map((card) => {
          console.log(card);
          return <ItemCard onSelectCard={onSelectCard} card={card} />;
        })}
      </ul>
    </div>
  );
}
