import '../blocks/ItemCard.css';

export default function ItemCard({ card, onSelectCard }) {
  return (
    <li className="item-card" onClick={() => onSelectCard(card)}>
      <div className="item-card__text">{card.name}</div>
      <img src={card.link} alt="WTWR logo" className="item-card__image" />
    </li>
  );
}
