import ItemCard from './ItemCard';
import '../blocks/ClothesSection.css';

export default function ClothesSection({ onSelectCard, clothingItems, onOpenPopup }) {
  const data = clothingItems.data;
  console.log(data[0]);

  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h1 className="clothes-section__header-text">Your items</h1>
        <button onClick={onOpenPopup} type="button" className="clothes-section__header-button">
          + Add clothes
        </button>
      </div>

      <ul className="cards-list clothes-section__cards-list">
        {data.map((card) => {
          return <ItemCard key={card._id} onSelectCard={onSelectCard} card={card} />;
        })}
      </ul>
    </section>
  );
}
