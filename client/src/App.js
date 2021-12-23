import './styles/app.scss';
import 'animate.css';
import { useEffect, useState } from "react";
import { WeatherWidget } from './components/WeatherWidget';
import { Cities } from './components/Cities';
import { Forecast } from './components/Forecast';
import dayjs from 'dayjs';
import { testDateCurrent, testDateFourDay } from './helpers/testdata';
// import { testDateCurrent, testDateFourDay } from './helpers/testdata';

const LOCATIONS = [
  {
    city_name: "Calgary",
    coordinates: "51.04473309999999,-114.0718831"
  }, {
    city_name: "Manila",
    coordinates: "14.5995124,120.9842195"
  }, {
    city_name: "Montreal",
    coordinates: "45.5016889,-73.567256"
  }
];

const CURRENT_CITY = LOCATIONS[0];

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
  const [currentDayForecast, setCurrentDayForecast] = useState(null || testDateCurrent);
  const [fourDayForecast, setFourDayForecast] = useState(null || testDateFourDay);

  const fetchData = async (coordinates) => {
    const startTime = dayjs().toISOString(); // must be inside, otherwise will cause multiple requests
    const endTime = dayjs().add(4, 'day').toISOString();
    await getTomorrowIoData(coordinates, startTime, endTime).then((response) => {
      setCurrentDayForecast(response[0]);
      setFourDayForecast(response.slice(1));
    });
  }

  useEffect(() => {
    fetchData(CURRENT_CITY.coordinates);
  }, [fetchData]);

  const handleClickCity = async (coordinates) => {
    try {
      fetchData(coordinates);
    } catch (error) {
      console.error(error);
    }
  }



  const getTomorrowIoData = async (coordinates, startTime, endTime) => {
    const API_KEY = "L9gfYCRfYj3LMz0JYbvhToI9yWIEbUNQ";
    let reqURL = `https://api.tomorrow.io/v4/timelines?fields=temperature,weatherCode&units=metric&timesteps=1d`;
    reqURL = reqURL + `&location=${coordinates}&apikey=${API_KEY}&startTime=${startTime}&endTime=${endTime}`;

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
      currentCity={CURRENT_CITY}
      currentDayForecast={currentDayForecast}
      fourDayForecast={fourDayForecast}
      handleClickCity={handleClickCity}>
      <Cities />
      <Forecast />
    </WeatherWidget>
  );
}

export default App;
