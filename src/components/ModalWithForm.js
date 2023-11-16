import iconClose from '../images/icon-close.svg';
import '../blocks/ModalWithForm.css';

export default function ModalWithForm({ type, title, button, handleClosePopup }) {
  return (
    <div className={`popup popup__${type}`}>
      <div className="popup__container popup__container_type_form">
        <button onClick={handleClosePopup} className="popup__btn-close">
          <img src={iconClose} alt="Close" className="popup__btn-close-img" />
        </button>
        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name="newClothesFrom">
          <label className="popup__label">Name</label>
          <input required type="text" id="card-title" minLength="2" maxLength="30" name="name" className="popup__form-input" placeholder="Name" />
          <span className="popup__input-error card-title-error"></span>
          <label className="popup__label">Name</label>
          <input required type="url" id="card-link" name="link" className="popup__form-input" placeholder="Image link" />
          <span className="popup__input-error card-link-error"></span>
          <fieldset className="popup__fieldset">
            <legend className="popup__legend">New garment</legend>
            <div>
              <input type="radio" id="hot" name="weather" />
              <label htmlFor="hot">Hot</label>
            </div>

            <div>
              <input type="radio" id="warm" name="weather" />
              <label htmlFor="warm">Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" name="weather" />
              <label htmlFor="cold">Cold</label>
            </div>

            <button type="submit" className="popup__btn-submit">
              {button}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
