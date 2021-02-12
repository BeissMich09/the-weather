import React from "react";
import style from "./HistorycalWeather.module.css";

const HistorycalWeather = (props) => {
  console.log("props", props);
  return (
    <div className={style.params}>
      <h3>{props.historycalWeather.city_name}</h3>
      <div className={style.param}>
        <p>Максимальная суточная температура:</p>
        <p>{props.historycalWeather.data[0].max_temp} °C</p>
      </div>
      <div className={style.param}>
        <p>Минимальная суточная температура:</p>
        <p>{props.historycalWeather.data[0].min_temp} °C</p>
      </div>
      <div className={style.param}>
        <p>Средняя скорость ветра:</p>
        <p>{props.historycalWeather.data[0].wind_spd} м/с</p>
      </div>
      <div className={style.param}>
        <p>Средняя солнечная радиация:</p>
        <p>{props.historycalWeather.data[0].solar_rad} Вт/м^2</p>
      </div>
      <div className={style.param}>
        <p>Средняя относительная влажность:</p>
        <p>{props.historycalWeather.data[0].rh} %</p>
      </div>
      <div className={style.param}>
        <p>Максимальный УФ-индекс:</p>
        <p>{props.historycalWeather.data[0].max_uv} </p>
      </div>
    </div>
  );
};

export default HistorycalWeather;
