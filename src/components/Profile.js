import SideBar from './SideBar';
import ClothesSection from './ClothesSection ';

export default function Profile({ onSelectCard, clothingItems }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection onSelectCard={onSelectCard} clothingItems={clothingItems} />
    </section>
  );
}
