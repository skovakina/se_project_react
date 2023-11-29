import avatar from '../images/avatar.png';
import '../blocks/SideBar.css';

export default function SideBar() {
  return (
    <div className="side-bar">
      <img src={avatar} alt="Avatar" className="side-bar__avatar" />
      <p className="side-bar__name">Terrence Tegegne</p>
    </div>
  );
}
