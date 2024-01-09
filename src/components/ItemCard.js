import { useContext } from 'react';
import '../blocks/ItemCard.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function ItemCard({ card, onSelectCard, handleCardLike }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const isLiked = card.likes.includes(currentUser._id);

  const isLikedClassName = `item-card__like ${isLiked ? 'item-card__like_liked' : 'item-card__like_default'}`;

  return (
    <li className="item-card">
      <div className="item-card__header">
        <div className="item-card__name">{card.name}</div>
        {isLoggedIn ? <div className={isLikedClassName} onClick={() => handleCardLike(card._id, isLiked)}></div> : <div></div>}
      </div>
      <img src={card.imageUrl} alt={card.name} onClick={() => onSelectCard(card)} className="item-card__image" />
    </li>
  );
}
