import SideBar from './SideBar';
import ClothesSection from './ClothesSection ';

export default function Profile({ onSelectCard }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection onSelectCard={onSelectCard} />
    </section>
  );
}
