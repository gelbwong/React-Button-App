import "./App.css";

import WeatherButton from "./WeatherButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <p>This is my trial React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <p>Created with the guidance of SheCodes React</p>
        <WeatherButton city="Sydney" />
      </header>
    </div>
  );
}

export default App;
