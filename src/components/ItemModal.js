import iconClose from '../images/icon-close.svg';

export default function ModalItem({ selectedCard, handleClosePopup }) {
  console.log(selectedCard);
  return (
    <div className={`popup`}>
      <div className="popup__container popup__container_type_image">
        <button onClick={handleClosePopup} className="popup__btn-close">
          <img src={iconClose} alt="Close" className="popup__btn-close-img" />
        </button>
        <img src={selectedCard.link} alt={selectedCard.name} className="popup__item-img" />
        <div className="popup__footer">
          <h2 className="popup__title">{selectedCard.name}</h2>
          <p className="popup__text">{selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}
