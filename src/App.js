import './App.css';
import {CityProvider} from './CityContext';
import Header from './Components/Header'
import WeatherContainer from './Components/WeatherContainer';



function App() {
  return (
    
    <div className=''>
     
      <CityProvider>
      <div className="hero-image">
        <Header />
      </div>
        <WeatherContainer />
      </CityProvider>
    
    </div>
  );
}

export default App;
