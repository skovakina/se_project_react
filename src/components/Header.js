import React, { useContext } from 'react';
import logo from '../images/logo.png';
import ToggleSwitch from './ToggleSwitch';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../blocks/Header.css';

import { NavLink } from 'react-router-dom';

export default function Header({ openItemModal, openRegisterModal, openLoginModal, location }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__welcome">
        <NavLink exact to="/">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </NavLink>

        <div className="header__today">{`${currentDate}, ${location}`}</div>
      </div>
      <div className="header__navigation">
        <ToggleSwitch></ToggleSwitch>

        {!isLoggedIn ? (
          <div className="header__login">
            <button onClick={openRegisterModal} type="button" className="header__profile-add-clothes-btn">
              Sign Up
            </button>
            <button onClick={openLoginModal} type="button" className="header__profile-add-clothes-btn">
              Log in
            </button>
          </div>
        ) : (
          <div className="header__profile">
            <button onClick={openItemModal} type="button" className="header__profile-add-clothes-btn">
              + Add clothes
            </button>
            <NavLink to="/profile" className="header__profile-link">
              <p className="header__profile-user-name">{currentUser.name}</p>
              <img src={currentUser.avatar} alt="Avatar" className="header__profile-user-avatar" />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
