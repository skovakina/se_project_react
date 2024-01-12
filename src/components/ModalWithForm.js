import iconClose from '../images/icon-close.svg';
import '../blocks/ModalWithForm.css';

export default function ModalWithForm({ children, type, title, button, secondaryButton, handleClosePopup, onSubmit, openLoginModal }) {
  return (
    <div className={`popup popup__${type}`}>
      <div className="popup__container popup__container_type_form">
        <button onClick={handleClosePopup} className="popup__btn-close">
          <img src={iconClose} alt="Close" className="popup__btn-close-img" />
        </button>
        <h2 className="popup__title">{title}</h2>

        <form onSubmit={onSubmit} className="popup__form" name="newClothesForm">
          {children}
          <div className="popup__buttons">
            <button type="submit" className="popup__btn-submit">
              {button}
            </button>
            {secondaryButton && secondaryButton}
          </div>
        </form>
      </div>
    </div>
  );
}
