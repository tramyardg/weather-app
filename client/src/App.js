import './app.scss';
import 'animate.css';
import { useEffect, useState } from "react";
import { WeatherWidget } from './components/WeatherWidget';
import { Cities } from './components/Cities';
import { Forecast } from './components/Forecast';

const LOCATIONS = [
  {
    city_name: "Ottawa",
    coordinates: "45.4215296,-75.69719309999999"
  }, {
    city_name: "Manila",
    coordinates: "14.5995124,120.9842195"
  }, {
    city_name: "Montreal",
    coordinates: "45.5016889,-73.567256"
  }
];


const WEATHER_CODES = [
  { code: 0, name: "Unknown", img: "/weather-icons/" },
  { code: 1000, name: "Clear, Sunny", img: "/weather-icons/clear_day.svg" },
  { code: 1100, name: "Mostly Clear", img: "/weather-icons/mostly_clear_day.svg" },
  { code: 1101, name: "Partly Cloudy", img: "/weather-icons/partly_cloudy_day.svg" },
  { code: 1102, name: "Mostly Cloudy", img: "/weather-icons/mostly_cloudy.svg" },
  { code: 1001, name: "Cloudy", img: "/weather-icons/cloudy.svg" },
  { code: 2000, name: "Fog", img: "/weather-icons/fog.svg" },
  { code: 2100, name: "Light Fog", img: "/weather-icons/fog_light.svg" },
  { code: 4000, name: "Drizzle", img: "/weather-icons/drizzle.svg" },
  { code: 4001, name: "Rain", img: "/weather-icons/rain.svg" },
  { code: 4200, name: "Light Rain", img: "/weather-icons/rain_light.svg" },
  { code: 4201, name: "Heavy Rain", img: "/weather-icons/rain_heavy.svg" },
  { code: 5000, name: "Snow", img: "/weather-icons/snow.svg" },
  { code: 5001, name: "Flurries", img: "/weather-icons/flurries.svg" },
  { code: 5100, name: "Light Snow", img: "/weather-icons/snow_light.svg" },
  { code: 5101, name: "Heavy Snow", img: "/weather-icons/snow_heavy.svg" },
  { code: 6000, name: "Freezing Drizzle", img: "/weather-icons/freezing_drizzle.svg" },
  { code: 6001, name: "Freezing Rain", img: "/weather-icons/freezing_rain.svg" },
  { code: 6200, name: "Light Freezing Rain", img: "/weather-icons/freezing_rain_light.svg" },
  { code: 6201, name: "Heavy Freezing Rain", img: "/weather-icons/freezing_rain_heavy.svg" },
  { code: 7000, name: "Ice Pellets", img: "/weather-icons/ice_pellets.svg" },
  { code: 7101, name: "Heavy Ice Pellets", img: "/weather-icons/ice_pellets_heavy.svg" },
  { code: 7102, name: "Light Ice Pellets", img: "/weather-icons/ice_pellets_light.svg" },
  { code: 8000, name: "Thunderstorm", img: "/weather-icons/tstorm.svg" },
];

function App() {
  const [currentDayForecast, setCurrentDayForecast] = useState(null);
  const [fourDayForecast, setFourDayForecast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const initialCoordinates = LOCATIONS[0].coordinates;
      await getTomorrowIoData(initialCoordinates).then((response) => {
        const currentDay = response[0]["values"];
        setCurrentDayForecast(currentDay);
        setFourDayForecast(response.splice(0, 4));
      });
    }
    fetchData();
  }, []);

  const handleClick = async (coordinates) => {
    try {
      await getTomorrowIoData(coordinates).then((response) => {
        const currentDay = response[0]["values"];
        setCurrentDayForecast(currentDay);
        setFourDayForecast(response.splice(1, 4)); // four day forecast after today's date
      });
    } catch (error) {
      console.error(error);
    }
  }



  const getTomorrowIoData = async (coordinates) => {
    const API_KEY = "PH8YZb3RYH4PEZnoCcMFslQWjWPrU9U3";
    const reqURL = `https://api.tomorrow.io/v4/timelines?location=${coordinates}&fields=temperature,weatherCode&units=metric&timesteps=1d&apikey=${API_KEY}`;

    const response = await fetch(reqURL);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body?.data?.timelines[0]["intervals"];
  }

  return (
    <WeatherWidget
      cities={LOCATIONS}
      weatherCodes={WEATHER_CODES}
      currentDayForecast={currentDayForecast}
      fourDayForecast={fourDayForecast}
      handleClick={handleClick}>
      <Cities />
      <Forecast />
    </WeatherWidget>
  );
}

export default App;
