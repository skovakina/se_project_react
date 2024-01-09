import { React, useState, useEffect, useContext } from 'react';
import ModalWithForm from './ModalWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function AddItemModal({ handleClosePopup, onSubmit, isOpen }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'avatar') {
      setAvatar(value);
    }
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    const data = { name, avatar };
    onSubmit(data);
  };

  return (
    <ModalWithForm type="editProfile" title="Edit profile" button="Save Changes" handleClosePopup={handleClosePopup} onSubmit={handleSubmitItem}>
      <label htmlFor="name" className="popup__label">
        Name
      </label>
      <input required type="text" id="name" name="name" className="popup__form-input" placeholder="Name" onChange={handleInputChange} value={name} />
      <span className="popup__input-error name-error"></span>
      <label htmlFor="avatar" className="popup__label">
        Avatar
      </label>
      <input
        required
        type="url"
        id="avatar"
        minLength="2"
        maxLength="30"
        name="avatar"
        className="popup__form-input"
        placeholder="Avatar"
        onChange={handleInputChange}
        value={avatar}
      />
      <span className="popup__input-error avatar-error"></span>
    </ModalWithForm>
  );
}
