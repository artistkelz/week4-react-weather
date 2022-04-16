import React from "react";
import "./App";
import { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [search, setSearch] = useState("");
  let [weather, setWeather] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "44c433b8d9236adacf244d61ee2e704d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateSearch(event) {
    setSearch(event.target.value);
  }

  function showTemperature(response) {
    console.log(response.data);
    setWeather({ temperature: Math.round(response.data.main.temp) });
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="type a city name"
          autoFocus={true}
          onChange={updateSearch}
        />
        <input type="submit" value="Search" />
      </form>
      {weather && (
        <ul>
          <li> Temperature: {weather.temperature}°C</li>
          <li> Description: {description} </li>
          <li> Humidity: {humidity}% </li>
          <li> Wind: {wind}km/hr </li>
          <div id="icon">
            <img src={icon} alt={description} />
          </div>
        </ul>
      )}
    </div>
  );
}
