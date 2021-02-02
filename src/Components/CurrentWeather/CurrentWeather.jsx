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
      <div className={style.genegalParams}>
        <p>
          {props.weather.data[0].city_name}: {props.weather.data[0].temp} °C, по
          ощущениям: {props.weather.data[0].app_temp} °C
        </p>
        {/* <p>{icon}</p> */}
      </div>

      <p>Описание: {description}</p>
      <p>
        Скорость ветра: {props.weather.data[0].wind_spd} м/с{" "}
        {props.weather.data[0].wind_cdir}
      </p>

      <p>Влажность: {props.weather.data[0].rh}%</p>
      <p>Покрытие облаками:{props.weather.data[0].clouds}% </p>
    </div>
  );
};

export default CurrentWeather;
