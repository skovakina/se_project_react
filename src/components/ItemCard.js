import '../blocks/ItemCard.css';

export default function ItemCard({ name, link }) {
  return (
    <li className="item-card">
      <div className="item-card__text">{name}</div>
      <img src={link} alt="WTWR logo" className="item-card__image" />
    </li>
  );
}
