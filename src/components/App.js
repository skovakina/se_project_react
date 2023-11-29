// import logo from '../images/logo.svg';
import { getWeather, parseWeatherData } from '../utils/weatherApi';
import { getItems, postItem, deleteItem } from '../utils/serverApi';
import Footer from './Footer';
import Header from './Header';
import WeatherCard from './WeatherCard';
import ItemModal from './ItemModal';
import Profile from './Profile';
import AddItemModal from './AddItemModal';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../blocks/App.css';

import Main from './Main';
import { useState, useEffect } from 'react';

function App() {
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState('');
  const [location, setLocation] = useState('');
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  useEffect(() => {
    getWeather()
      .then((data) => {
        setLocation(data.name);
        setTemp(parseWeatherData(data));
        setWeather(data.weather[0].description);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((cards) => {
        console.log(cards); // hooray! it's logging cards
        setClothingItems(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const openItemModal = () => {
    setActiveModal('create');
  };

  const closeItemModal = () => {
    console.log('close');
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F' ? setCurrentTemperatureUnit('C') : setCurrentTemperatureUnit('F');
  };

  const handleAddItemSubmit = (data) => {
    data._id = clothingItems.reduce((max, item) => (item._id > max ? item._id : max), 0) + 1;
    postItem(data)
      .then(() => {
        setClothingItems([data, ...clothingItems]);
        closeItemModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteItem = (card) => {
    deleteItem(card._id).then(() => {
      const updatedItems = clothingItems.filter((item) => item._id !== card._id);
      setClothingItems(updatedItems);
      closeItemModal();
    });
  };

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <BrowserRouter>
          <Header onOpenPopup={openItemModal} location={location} />
          <Switch>
            <Route path="/profile">
              <Profile onSelectCard={handleSelectedCard} clothingItems={clothingItems} onOpenPopup={openItemModal} />
            </Route>
            <Route exact path="/">
              <Main clothingItems={clothingItems} weatherTemp={temp} onSelectCard={handleSelectedCard} weather={weather} />
            </Route>
          </Switch>
        </BrowserRouter>

        {activeModal === 'create' && (
          <AddItemModal handleClosePopup={closeItemModal} isOpen={activeModal === 'create'} onAddItem={handleAddItemSubmit} />
        )}

        {activeModal === 'preview' && <ItemModal selectedCard={selectedCard} handleClosePopup={closeItemModal} handleDeleteItem={handleDeleteItem} />}

        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
