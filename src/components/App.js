// import logo from '../images/logo.svg';
import '../blocks/App.css';
import '../vendor/fonts.css';
import getWeather from '../utils/weatherApi';
import Footer from './Footer';
import Header from './Header';
import WeatherCard from './WeatherCard';
import ItemCard from './ItemCard';

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
  const handleOpenPopup = () => {
    setActiveModal('create');
  };

  const handleClosePopup = () => {
    console.log('click');
    setActiveModal('');
  };

  return (
    <div className="App">
      <Header onOpenPopup={handleOpenPopup} />
      <WeatherCard day={true} weather="cloudy" weatherTemp={weatherTemp} />

      <Main weatherTemp={weatherTemp} />
      {activeModal === 'create' && <ModalWithForm type="newClothes" title="New garment" button="Add garment" handleClosePopup={handleClosePopup} />}
      <Footer />
    </div>
  );
}

export default App;
