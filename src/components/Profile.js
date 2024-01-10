import SideBar from './SideBar';
import ClothesSection from './ClothesSection ';
import '../blocks/Profile.css';

export default function Profile({ openEditProfileModal, onSelectCard, clothingItems, onOpenPopup, onLogOut }) {
  return (
    <section className="profile">
      <SideBar openEditProfileModal={openEditProfileModal} onLogOut={onLogOut} />
      <ClothesSection onSelectCard={onSelectCard} clothingItems={clothingItems} onOpenPopup={onOpenPopup} />
    </section>
  );
}
