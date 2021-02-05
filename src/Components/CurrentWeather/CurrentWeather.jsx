import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import style from "./CurrentWeather.module.css";
const CurrentWeather = (props) => {
  console.log("props", props.weather.data[0].weather);
  let [icon, description] = [
    props.weather.data[0].weather.icon,
    props.weather.data[0].weather.description,
  ];
  return (
    <div className={style.item}>
      <h2>
        {props.weather.data[0].city_name}{" "}
        <i class="fas fa-city"></i>
      </h2>
      <div className={style.genegalParams}>
        <p>
          <i class="fas fa-temperature-low"></i> {props.weather.data[0].temp}{" "}
          °C, по ощущениям: {props.weather.data[0].app_temp} °C
        </p>
        {/* <p>{icon}</p> */}
      </div>
      <p>Описание: {description}</p>
      <p>
        Скорость ветра <i class="fas fa-wind"></i>:{" "}
        {props.weather.data[0].wind_spd} м/с <i class="fas fa-compass"></i>
        {props.weather.data[0].wind_cdir}
      </p>

      <p>
        Влажность <i class="fas fa-tint"></i>: {props.weather.data[0].rh}%
      </p>
      <p>
        Покрытие облаками <i class="fas fa-cloud"></i>:
        {props.weather.data[0].clouds}%{" "}
      </p>
    </div>
  );
};

export default CurrentWeather;
