import React from 'react';
import logo from '../images/logo.png';
import avatar from '../images/avatar.png';
import Checkbox from './Checkbox';

import { NavLink } from 'react-router-dom';

export default function Header({ onOpenPopup }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  // checkbox
  const [checked, setChecked] = React.useState(false);
  const handleChecked = () => {
    setChecked(!checked);
    console.log(checked);
  };
  //////

  return (
    <header className="header">
      <div className="header__welcome">
        <NavLink exact to="/">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </NavLink>

        <div className="header__date">{currentDate}</div>
      </div>

      <div className="header__profile">
        <Checkbox value={checked} onChange={handleChecked}></Checkbox>
        <button onClick={onOpenPopup} type="button" className="header__profile-add-clothes-btn">
          + Add clothes
        </button>
        <NavLink to="/profile" className="header__profile-link">
          <p className="header__profile-user-name">Terrence Tegegne</p>
          <img src={avatar} alt="Avatar" className="header__profile-user-avatar" />
        </NavLink>
      </div>
    </header>
  );
}
