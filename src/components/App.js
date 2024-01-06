// import logo from '../images/logo.svg';
import { getWeather, parseWeatherData } from '../utils/weatherApi';
import { getItems, postItem, deleteItem, signup, signin } from '../utils/serverApi';
import Footer from './Footer';
import Header from './Header';
import ItemModal from './ItemModal';
import Profile from './Profile';
import AddItemModal from './AddItemModal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../blocks/App.css';

import Main from './Main';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, seLoggedIn] = useState(false);
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
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const openRegisterModal = () => {
    setActiveModal('register');
  };

  const openLoginModal = () => {
    setActiveModal('login');
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === 'F' ? 'C' : 'F');
  };

  const handleAddItemSubmit = (data) => {
    postItem(data)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        closeItemModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteItem = (card) => {
    deleteItem(card._id)
      .then(() => {
        const updatedItems = clothingItems.filter((item) => item._id !== card._id);
        setClothingItems(updatedItems);
        closeItemModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignup = (user) => {
    signup(user)
      .then(() => {
        closeItemModal();
        const data = { email: user.email, password: user.password };
        console.log(data);
        handleSignin(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignin = (user) => {
    signin(user)
      .then((res) => {
        console.log(res);
        closeItemModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <BrowserRouter>
          <Header openItemModal={openItemModal} openRegisterModal={openRegisterModal} openLoginModal={openLoginModal} location={location} />
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

        {activeModal === 'register' && (
          <RegisterModal handleClosePopup={closeItemModal} isOpen={activeModal === 'register'} onAddItem={handleSignup} />
        )}

        {activeModal === 'login' && <LoginModal handleClosePopup={closeItemModal} isOpen={activeModal === 'login'} onSubmit={handleSignin} />}
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
