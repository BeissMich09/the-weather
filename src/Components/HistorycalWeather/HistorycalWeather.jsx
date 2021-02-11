import React from "react";

const HistorycalWeather = (props) => {
  console.log("props", props);
  return (
    <div>
      <p>{props.historycalWeather.city_name}</p>
      <div>
        <p>Максимальная суточная температура:</p>
        <p>{props.historycalWeather.data[0].max_temp} °C</p>
      </div>
      <div>
        <p>Минимальная суточная температура:</p>
        <p>{props.historycalWeather.data[0].min_temp} °C</p>
      </div>
      <div>
        <p>Средняя скорость ветра:</p>
        <p>{props.historycalWeather.data[0].wind_spd} м/с</p>
      </div>
      <div>
        <p>Средняя солнечная радиация:</p>
        <p>{props.historycalWeather.data[0].solar_rad} Вт/м^2</p>
      </div>
      <div>
        <p>Средняя относительная влажность:</p>
        <p>{props.historycalWeather.data[0].rh} %</p>
      </div>
      <div>
        <p>Максимальный УФ-индекс:</p>
        <p>{props.historycalWeather.data[0].max_uv} </p>
      </div>
    </div>
  );
};

export default HistorycalWeather;
