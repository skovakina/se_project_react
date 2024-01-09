import avatar from '../images/avatar.png';
import '../blocks/SideBar.css';

export default function SideBar({ openEditProfileModal }) {
  return (
    <div className="side-bar">
      <div className="side-bar__user">
        <img src={avatar} alt="Avatar" className="side-bar__avatar" />
        <p className="side-bar__name">Terrence Tegegne</p>
      </div>

      <button onClick={openEditProfileModal} type="button" className="header__profile-add-clothes-btn">
        Change profile data
      </button>
      <button onClick={openEditProfileModal} type="button" className="header__profile-add-clothes-btn">
        Log out
      </button>
    </div>
  );
}
