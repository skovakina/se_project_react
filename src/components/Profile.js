import '../vendor/fonts.css';
import '../blocks/Profile.css';
import '../blocks/ClothesSection.css';

import ItemCard from './ItemCard';
import SideBar from './SideBar';
import ClothesSection from './ClothesSection ';
import defaultClothingItems from '../utils/constants';

export default function Profile({ onSelectCard }) {
  return (
    <section className="profile">
      <SideBar />
      <div className="clothes-section">
        <div className="clothes-section__header">
          <h1 className="clothes-section__header-text">Your items</h1>
          <button type="button" className="clothes-section__header-button">
            + Add clothes
          </button>
        </div>

        <ul className="cards-list clothes-section__cards-list">
          {defaultClothingItems.map((card) => {
            console.log(card);
            return <ItemCard key={card._id} onSelectCard={onSelectCard} card={card} />;
          })}
        </ul>
      </div>
    </section>
  );
}
