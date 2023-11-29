import SideBar from './SideBar';
import ClothesSection from './ClothesSection ';

export default function Profile({ onSelectCard, clothingItems, onOpenPopup }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection onSelectCard={onSelectCard} clothingItems={clothingItems} onOpenPopup={onOpenPopup} />
    </section>
  );
}
