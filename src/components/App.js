// import logo from '../images/logo.svg';
import '../blocks/App.css';
import '../vendor/fonts.css';
import getWeather from '../utils/weatherApi';
import Footer from './Footer';
import Header from './Header';
import WeatherCard from './WeatherCard';
import ModalItem from './ModalItem';

import Main from './Main';
import ModalWithForm from './ModalWithForm';
import { useState } from 'react';

function App() {
  function getPosition() {
    const position = navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
    });
    console.log(position);
  }

  // useEffect(() => {
  //   getWeather().then((data) => {
  //     console.log(data);
  //   });
  // });

  const weatherTemp = '75';

  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});

  const handleOpenPopup = () => {
    setActiveModal('create');
  };

  const handleClosePopup = () => {
    console.log('click');
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  return (
    <div className="App">
      <Header onOpenPopup={handleOpenPopup} />
      <WeatherCard day={true} weather="cloudy" weatherTemp={weatherTemp} />

      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />

      {activeModal === 'create' && <ModalWithForm type="newClothes" title="New garment" button="Add garment" handleClosePopup={handleClosePopup} />}

      {activeModal === 'preview' && <ModalItem selectedCard={selectedCard} handleClosePopup={handleClosePopup} />}

      <Footer />
    </div>
  );
}

export default App;
