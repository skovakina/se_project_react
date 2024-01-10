import '../blocks/SideBar.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function SideBar({ openEditProfileModal, onLogOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="side-bar">
      <div className="side-bar__user">
        <img src={currentUser.avatar} alt="Avatar" className="side-bar__avatar" />
        <p className="side-bar__name">{currentUser.name}</p>
      </div>

      <button onClick={openEditProfileModal} type="button" className="header__profile-add-clothes-btn">
        Change profile data
      </button>
      <button onClick={onLogOut} type="button" className="header__profile-add-clothes-btn">
        Log out
      </button>
    </div>
  );
}
