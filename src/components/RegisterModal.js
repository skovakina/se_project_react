import { React, useState, useEffect } from 'react';
import ModalWithForm from './ModalWithForm';

export default function AddItemModal({ handleClosePopup, onAddItem, isOpen, openLoginModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setPassword('');
      setAvatar('');
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'avatar') {
      setAvatar(value);
    }
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    const data = { name, email, password, avatar };
    onAddItem(data);
  };

  return (
    <ModalWithForm
      type="register"
      title="Register"
      button="Register"
      handleClosePopup={handleClosePopup}
      onSubmit={handleSubmitItem}
      openLoginModal={openLoginModal}
    >
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
        value={name}
      />
      <span className="popup__input-error card-title-error"></span>
      <label htmlFor="email" className="popup__label">
        Email
      </label>
      <input
        required
        type="email"
        id="email"
        name="email"
        className="popup__form-input"
        placeholder="Email"
        onChange={handleInputChange}
        value={email}
      />
      <span className="popup__input-error email-error"></span>

      <label htmlFor="avatar" className="popup__label">
        avatar
      </label>
      <input
        required
        type="url"
        id="avatar"
        name="avatar"
        className="popup__form-input"
        placeholder="Avatar Url"
        onChange={handleInputChange}
        value={avatar}
      />
      <span className="popup__input-error avatar-error"></span>

      <label htmlFor="password" className="popup__label">
        Image
      </label>
      <input
        required
        type="password"
        id="password"
        name="password"
        className="popup__form-input"
        placeholder="Password"
        onChange={handleInputChange}
        value={password}
      />
      <span className="popup__input-error password-error"></span>
    </ModalWithForm>
  );
}
