import '../blocks/SideBar.css';
import avatar from '../images/avatar.png';

export default function SideBar() {
  return (
    <div className="side-bar">
      <img src={avatar} alt="Avatar" className="side-bar__avatar" />
      <p className="side-bar__name">Terrence Tegegne</p>
    </div>
  );
}
