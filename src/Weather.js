import React, { useState } from "react";
import axios from "axios";

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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e2f2d035b6b20b81393375509948c0e&units=metric`
      )
      .then((response) => {
        setTemp(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
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
        <div>
          <h2>{city}</h2>
          <p>Temperature: {temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
