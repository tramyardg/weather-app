import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {


  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message)
      }
      console.log(body);
    };
    callBackendAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
