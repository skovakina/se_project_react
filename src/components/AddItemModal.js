import { React, useState } from 'react';
import ModalWithForm from './ModalWithForm';

export default function AddItemModal({ handleClosePopup, onAddItem, isOpen }) {
  const [formData, setFormData] = useState({
    _id: 0,
    name: '',
    weather: '',
    imageUrl: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    console.log(formData);
    onAddItem(formData);
  };

  return (
    <ModalWithForm type="newClothes" title="New garment" button="Add garment" handleClosePopup={handleClosePopup} onSubmit={handleSubmitItem}>
      <label htmlFor="name" className="popup__label">
        Name
      </label>
      <input
        required
        type="text"
        id="name"
        minLength="2"
        maxLength="30"
        name="name"
        className="popup__form-input"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <span className="popup__input-error card-title-error"></span>
      <label htmlFor="card-link" className="popup__label">
        Image
      </label>
      <input required type="url" id="card-link" name="imageUrl" className="popup__form-input" placeholder="Image URL" onChange={handleInputChange} />
      <span className="popup__input-error card-link-error"></span>
      <fieldset className="popup__fieldset">
        <legend className="popup__legend">Select the weather type:</legend>
        <div onChange={handleInputChange}>
          <input required type="radio" id="hot" name="weather" value="Hot" />
          <label className="popup__fieldset-label" htmlFor="hot">
            Hot
          </label>
        </div>
        <div onChange={handleInputChange}>
          <input type="radio" id="warm" name="weather" value="Warm" />
          <label className="popup__fieldset-label" htmlFor="warm">
            Warm
          </label>
        </div>
        <div onChange={handleInputChange}>
          <input type="radio" id="cold" name="weather" value="Cold" />
          <label className="popup__fieldset-label" htmlFor="cold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
