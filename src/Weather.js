import React, { useState } from "react";
import axios from "axios";
import {notyourapi} from './Apikey';



function Weather() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${notyourapi}&units=metric`
      )
      .then((response) => {
        setTemp(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div classname ="output">
      <h1>Weather App</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {temp && (
        <div >
          <h2>{city}</h2>
          <p class="weather-info">Temperature: {temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
