import './app.scss';
import { useEffect } from "react";
import { WeatherWidget } from './components/WeatherWidget';
import { Cities } from './components/Cities';


const locations = [
  {
    city_name: "Manila",
    coordinates: "14.5995124,120.9842195"
  }, {
    city_name: "Ottawa",
    coordinates: "45.4215296,-75.69719309999999"
  }, {
    city_name: "Montreal",
    coordinates: "45.5016889,-73.567256"
  }
];

function App() {
  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch('/api');
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message)
      }
      console.log(body);
    };
    callBackendAPI();
  }, []);

  const handleClick = (coordinates) => {
    console.log(coordinates);

  }

  return (
    <div className="weather-app">
      <div className="weather-widget">
        <WeatherWidget cities={locations} handleClick={handleClick}>
          <Cities />
        </WeatherWidget>
      </div>
    </div>
  );
}

export default App;
