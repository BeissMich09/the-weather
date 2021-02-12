import React from "react";
import style from "./AirQuality.module.css";

const AirQuality = (props) => {
  if (props.quality.data !== undefined && props.quality.data.length !== 0) {
    let quality = props.quality.data[0];

    const { co, so2, o3, no2, aqi } = quality;
    return (
      <div className={style.params}>
        <h3>{props.quality.city_name}</h3>
        <p>Индекс загрязнения: {aqi}</p>
        <p>CO: {co} µg/m³</p>
        <p>SO2: {so2} µg/m³</p>
        <p>O3: {o3} µg/m³</p>
        <p>NO2: {no2} µg/m³</p>
      </div>
    );
  } else {
    return <div>Нет данных</div>;
  }
};
export default AirQuality;
