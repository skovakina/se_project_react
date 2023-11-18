// import logo from '../images/logo.svg';
import '../blocks/App.css';
import '../vendor/fonts.css';
import getWeather from '../utils/weatherApi';
import Footer from './Footer';
import Header from './Header';
import WeatherCard from './WeatherCard';
import ModalItem from './ItemModal';

import Main from './Main';
import ModalWithForm from './ModalWithForm';
import { useState, useEffect } from 'react';

function App() {
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState('');

  useEffect(() => {
    getWeather()
      .then((data) => {
        setTemp(Math.round(data.main.temp));
        setWeather(data.weather[0].description);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const openItemModal = () => {
    setActiveModal('create');
  };

  const closeItemModal = () => {
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  return (
    <div className="App">
      <Header onOpenPopup={openItemModal} />
      <WeatherCard day={true} weather="cloudy" weatherTemp={temp} weatherDesc={weather} />

      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />

      {activeModal === 'create' && (
        <ModalWithForm type="newClothes" title="New garment" button="Add garment" handleClosePopup={closeItemModal}>
          <label htmlFor="name" className="popup__label">
            Name
          </label>
          <input required type="text" id="name" minLength="2" maxLength="30" name="name" className="popup__form-input" placeholder="Name" />
          <span className="popup__input-error card-title-error"></span>
          <label htmlFor="card-link" className="popup__label">
            Image
          </label>
          <input required type="url" id="card-link" name="link" className="popup__form-input" placeholder="Image URL" />
          <span className="popup__input-error card-link-error"></span>
          <fieldset className="popup__fieldset">
            <legend className="popup__legend">Select the weather type:</legend>
            <div>
              <input type="radio" id="hot" name="weather" />
              <label htmlFor="hot">Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" name="weather" />
              <label htmlFor="warm">Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" name="weather" />
              <label htmlFor="cold">Cold</label>
            </div>
          </fieldset>
        </ModalWithForm>
      )}

      {activeModal === 'preview' && <ModalItem selectedCard={selectedCard} handleClosePopup={closeItemModal} />}

      <Footer />
    </div>
  );
}

export default App;
