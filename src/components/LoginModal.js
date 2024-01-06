import { React, useState, useEffect } from 'react';
import ModalWithForm from './ModalWithForm';

export default function AddItemModal({ handleClosePopup, onSubmit, isOpen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      setEmail('');
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    const data = { email, password };
    onSubmit(data);
  };

  return (
    <ModalWithForm type="login" title="Log in" button="Log In" handleClosePopup={handleClosePopup} onSubmit={handleSubmitItem}>
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
      <label htmlFor="password" className="popup__label">
        Password
      </label>
      <input
        required
        type="password"
        id="password"
        minLength="2"
        maxLength="30"
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
