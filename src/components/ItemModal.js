import iconClose from '../images/icon-close.svg';
import '../blocks/ItemModal.css';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function ItemModal({ selectedCard, handleClosePopup, handleDeleteItem }) {
  const { currentUser } = useContext(CurrentUserContext);
  // console.log(currentUser);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `popup__btn-delete ${isOwn ? 'popup__btn-delete_visible' : 'popup__btn-delete_hidden'}`;

  const handleDeleteCard = (event) => {
    event.preventDefault();
    handleDeleteItem(selectedCard);
  };

  return (
    <div className={`popup`}>
      <div className="popup__container popup__container_type_image">
        <button onClick={handleClosePopup} className="popup__btn-close">
          <img src={iconClose} alt="Close" className="popup__btn-close-img" />
        </button>
        <img src={selectedCard.imageUrl} alt={selectedCard.name} className="popup__item-img" />

        <div className="popup__description">
          <button onClick={handleDeleteCard} className={itemDeleteButtonClassName}>
            Delete item
          </button>
          <h2 className="popup__title">{selectedCard.name}</h2>
          <p className="popup__text">{selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}
