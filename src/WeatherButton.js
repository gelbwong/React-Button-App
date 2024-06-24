import React from "react";
import axios from "axios";

export default function WeatherButton(props) {
  function displayWeather(data) {
    // Creates alert from API response
    let temp = data.data.main.temp;
    let descrip = data.data.weather[0].description;
    let wind = data.data.wind.speed;
    let city = data.data.name;
    let message = `The weather in ${city} is currently ${temp}°C with a ${descrip} and a windspeed of ${wind}km/h`;
    alert(message);
  }
  function getWeather() {
    //Runs API response with the props from calling the function in App.js
    let unit = "metric";
    let cityName = props.city;
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    //Please not abuse this API key I got it from my SheCodes course but I think you can get one yourself for free on the OpenWeatherMap site :)
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }
  return (
    <button className="p-3" onClick={getWeather}>
      Weather in {props.city}
    </button>
  );
}
