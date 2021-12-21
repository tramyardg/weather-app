import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

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

  return (
    <div className="weather-app">
      asd
    </div>
  );
}

export default App;
