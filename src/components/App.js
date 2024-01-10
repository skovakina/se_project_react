import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
//  variables
import { getWeather, parseWeatherData } from '../utils/weatherApi';
import { getItems, postItem, deleteItem, updateUser, likeItem, dislikeItem } from '../utils/serverApi';
import { signup, signin, checkToken } from '../utils/auth';
//  components
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import ItemModal from './ItemModal';
import Profile from './Profile';
import AddItemModal from './AddItemModal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import EditProfileModal from './EditProfileModal';
import ProtectedRoute from './ProtectedRoute';
//  context
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
//css
import '../blocks/App.css';

function App() {
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState('');
  const [location, setLocation] = useState('');
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

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

  useEffect(() => {
    updateCurrentUser();
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

  const openEditProfileModal = () => {
    setActiveModal('edit');
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === 'F' ? 'C' : 'F');
  };

  const handleAddItemSubmit = (data) => {
    postItem(data, getToken())
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        closeItemModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleProfileSubmit = (user) => {
    updateUser(user, getToken())
      .then((res) => {
        setCurrentUser(res.data);
        closeItemModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteItem = (card) => {
    deleteItem(card._id, getToken())
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
        handleSignin(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignin = (user) => {
    // email and password
    signin(user)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
        }
        setCurrentUser(res.user);
        setLoggedIn(true);
        closeItemModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getToken = () => localStorage.getItem('jwt');

  const updateCurrentUser = () => {
    checkToken(localStorage.getItem('jwt'))
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('jwt');
  };

  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem('jwt');

    isLiked
      ? dislikeItem(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => cards.map((card) => (card._id === id ? updatedCard : card)));
          })
          .catch((err) => console.log(err))
      : likeItem(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => cards.map((card) => (card._id === id ? updatedCard : card)));
          })
          .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
          <BrowserRouter>
            <Header openItemModal={openItemModal} openRegisterModal={openRegisterModal} openLoginModal={openLoginModal} location={location} />
            <Switch>
              <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
                <Profile
                  openEditProfileModal={openEditProfileModal}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onOpenPopup={openItemModal}
                  onLogOut={logout}
                  handleCardLike={handleCardLike}
                />
              </ProtectedRoute>

              <Route exact path="/">
                <Main
                  clothingItems={clothingItems}
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  weather={weather}
                  handleCardLike={handleCardLike}
                />
              </Route>
            </Switch>
          </BrowserRouter>

          {activeModal === 'create' && (
            <AddItemModal handleClosePopup={closeItemModal} isOpen={activeModal === 'create'} onAddItem={handleAddItemSubmit} />
          )}

          {activeModal === 'edit' && (
            <EditProfileModal handleClosePopup={closeItemModal} isOpen={activeModal === 'edit'} onSubmit={handleProfileSubmit} />
          )}

          {activeModal === 'preview' && (
            <ItemModal selectedCard={selectedCard} handleClosePopup={closeItemModal} handleDeleteItem={handleDeleteItem} />
          )}

          {activeModal === 'register' && (
            <RegisterModal handleClosePopup={closeItemModal} isOpen={activeModal === 'register'} onAddItem={handleSignup} />
          )}

          {activeModal === 'login' && <LoginModal handleClosePopup={closeItemModal} isOpen={activeModal === 'login'} onSubmit={handleSignin} />}
        </CurrentUserContext.Provider>
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
