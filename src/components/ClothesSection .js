import ItemCard from './ItemCard';

export default function ClothesSection({ onSelectCard, clothingItems }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h1 className="clothes-section__header-text">Your items</h1>
        <button type="button" className="clothes-section__header-button">
          + Add clothes
        </button>
      </div>

      <ul className="cards-list clothes-section__cards-list">
        {clothingItems.map((card) => {
          return <ItemCard key={card._id} onSelectCard={onSelectCard} card={card} />;
        })}
      </ul>
    </section>
  );
}
