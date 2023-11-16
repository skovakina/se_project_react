import '../blocks/ItemCard.css';

export default function ItemCard({ key, name, link }) {
  return (
    <li className="item-card" key={key}>
      <div className="item-card__text">{name}</div>
      <img src={link} alt="WTWR logo" className="item-card__image" />
    </li>
  );
}
