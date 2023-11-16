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

  return (
    <div className="App">
      <Header />
      <WeatherCard day={true} weather="cloudy" weatherTemp={weatherTemp} />

      <Main weatherTemp={weatherTemp} />
      <ModalWithForm />
      <Footer />
    </div>
  );
}

export default App;
