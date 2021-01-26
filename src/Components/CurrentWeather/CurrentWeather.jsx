import React from "react";

const CurrentWeather = (props) => {
  console.log("props", props.weather.data[0].weather);
  let [icon, description] = [
    props.weather.data[0].weather.icon,
    props.weather.data[0].weather.description,
  ];
  return (
    <div>
      <p>Название города: {props.weather.data[0].city_name}</p>
      <p>{icon}</p>
      <p>Описание: {description}</p>
      <p>Скорость ветра: {props.weather.data[0].wind_spd} м/с</p>
    </div>
  );
};

export default CurrentWeather;
