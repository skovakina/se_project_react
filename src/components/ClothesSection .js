import ItemCard from './ItemCard';
import '../blocks/ClothesSection.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function ClothesSection({ onSelectCard, clothingItems, onOpenPopup }) {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser._id);

  const filterCards = clothingItems.filter((card) => {
    return currentUser._id === card.owner;
  });

  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h1 className="clothes-section__header-text">Your items</h1>
        <button onClick={onOpenPopup} type="button" className="clothes-section__header-button">
          + Add clothes
        </button>
      </div>

      <ul className="cards-list clothes-section__cards-list">
        {filterCards.map((card) => {
          return <ItemCard key={card._id} onSelectCard={onSelectCard} card={card} />;
        })}
      </ul>
    </section>
  );
}
