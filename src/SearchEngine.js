import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

function SearchEngine() {
  const [city, setCitySearch] = useState(null);
  const [weather, setWeather] = useState(null);
  const [showResults, setShowResults] = useState(false);

  function handleInputChange(event) {
    setCitySearch(event.target.value);
  }

  function displayWeather(information) {
    let iconCode = information.data.weather[0].icon;
    let imgUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    let altText = information.data.weather[0].description + " icon";

    setWeather({
      description: information.data.weather[0].description,
      temperature: information.data.main.temp,
      humidity: information.data.main.humidity,
      wind: information.data.wind.speed,
      city: information.data.name,
      altText: altText,
      imgUrl: imgUrl,
    });

    console.log(information.data);
    setShowResults(true);
  }

  function getWeather(lat, lon) {
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let unit = "metric";

    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    axios.get(weatherApi).then(displayWeather);
  }

  function handleCoordinates(geoCoord) {
    let lat = geoCoord.data[0].lat;
    let lon = geoCoord.data[0].lon;

    getWeather(lat, lon);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    axios.get(geoApi).then(handleCoordinates);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="searchBox"
          id="searchBox"
          className="p-2 inputSearch form-control-lg"
          placeholder="Enter a city..."
          onChange={handleInputChange}
        />

        <input
          type="submit"
          value="Search"
          className="p-2 inputSubmit form-control-lg"
        />
      </form>
      {showResults && (
        <ul className="mt-5 list-group list-group-flush ">
          <li className="list-group-item searchEngineResult">{weather.city}</li>
          <li className="list-group-item searchEngineResult">
            Temperature: {Math.round(weather.temperature)}°C
          </li>
          <li className="list-group-item searchEngineResult">
            Description: {weather.description}
          </li>
          <li className="list-group-item searchEngineResult">
            Humidity: {weather.humidity}%
          </li>
          <li className="list-group-item searchEngineResult">
            Wind: {Math.round(weather.wind)} km/hr
          </li>
          <li className="list-group-item searchEngineResult">
            <img src={weather.imgUrl} alt={weather.altText} />
          </li>
        </ul>
      )}
    </div>
  );
}

export default SearchEngine;
