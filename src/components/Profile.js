import SideBar from './SideBar';
import ClothesSection from './ClothesSection ';
import '../blocks/Profile.css';

export default function Profile({ openEditProfileModal, onSelectCard, clothingItems, onOpenPopup }) {
  return (
    <section className="profile">
      <SideBar openEditProfileModal={openEditProfileModal} />
      <ClothesSection onSelectCard={onSelectCard} clothingItems={clothingItems} onOpenPopup={onOpenPopup} />
    </section>
  );
}
