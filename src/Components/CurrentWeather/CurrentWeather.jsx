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
      <p>
        Скорость ветра: {props.weather.data[0].wind_spd} м/с{" "}
        {props.weather.data[0].wind_cdir}
      </p>
      <p>Температура: {props.weather.data[0].temp} °C</p>
      <p>По ощущениям: {props.weather.data[0].app_temp}</p>
      <p>Влажность: {props.weather.data[0].rh}%</p>
      <p>Покрытие облаками:{props.weather.data[0].clouds}%</p>
    </div>
  );
};

export default CurrentWeather;
