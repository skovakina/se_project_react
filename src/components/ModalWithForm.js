import iconClose from '../images/icon-close.svg';

export default function ModalWithForm() {
  return (
    <div className="popup popup__new-clothes">
      <div class="popup__container popup__container_type_form">
        <button class="popup__btn-close">
          <img src={iconClose} alt="Close" class="popup__btn-close-img" />
        </button>
        <h2 class="popup__title">New garment</h2>
        <label className="popup__label">Name</label>
        <form class="popup__form" name="newCardForm">
          <input
            required
            type="text"
            id="card-title"
            minlength="2"
            maxlength="30"
            name="name"
            class="popup__form-input"
            value=""
            placeholder="Title"
          />
          <span class="popup__input-error card-title-error"></span>
          <input required type="url" id="card-link" name="link" class="popup__form-input" value="" placeholder="Image link" />
          <span class="popup__input-error card-link-error"></span>
          <button disabled type="submit" class="popup__btn-submit popup__btn-submit_disabled">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
