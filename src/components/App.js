// import logo from '../images/logo.svg';
import { getWeather, parseWeatherData } from '../utils/weatherApi';
import Footer from './Footer';
import Header from './Header';
import WeatherCard from './WeatherCard';
import ModalItem from './ItemModal';
import Profile from './Profile';
import AddItemModal from './AddItemModal';
import { CurrentTemperatureUnitContext } from '../context/CurrentTemperatureUnitContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import defaultClothingItems from '../utils/constants';

import Main from './Main';
import { useState, useEffect } from 'react';

function App() {
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState('');
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  useEffect(() => {
    getWeather()
      .then((data) => {
        setTemp(parseWeatherData(data));
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

  const handleCurrentTemperature = () => {
    currentTemperatureUnit === 'F' ? setCurrentTemperatureUnit('C') : setCurrentTemperatureUnit('F');
  };

  const onAddItem = (data) => {
    data._id = defaultClothingItems.length;
    defaultClothingItems.push(data);
    console.log(data, defaultClothingItems);
  };

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleCurrentTemperature }}>
        <BrowserRouter>
          <Header onOpenPopup={openItemModal} />
          <Switch>
            <Route path="/profile" onSelectCard={handleSelectedCard}>
              <Profile />
            </Route>
            <Route exact path="/">
              <WeatherCard day={true} weather="cloudy" weatherTemp={currentTemperatureUnit === 'F' ? temp.F : temp.C} weatherDesc={weather} />
              <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
            </Route>
          </Switch>
        </BrowserRouter>

        {activeModal === 'create' && <AddItemModal handleClosePopup={closeItemModal} isOpen={activeModal === 'create'} onAddItem={onAddItem} />}

        {activeModal === 'preview' && <ModalItem selectedCard={selectedCard} handleClosePopup={closeItemModal} />}

        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
