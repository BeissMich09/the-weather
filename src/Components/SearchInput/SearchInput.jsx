import React from "react";

const SearchInput = (props) => {
  console.log(props.inputCity);
  let valueCity = props.inputCity;

  return (
    <div>
      <div>
        Город{" "}
        <input
          onChange={(e) => props.getInputCity(e.target.value)}
          type="text"
          value={valueCity}
        />
      </div>
      <div>
        Страна{" "}
        <input
          onChange={(e) => props.getInputCountry(e.target.value)}
          type="text"
          value={props.inputCountry}
        />
      </div>
      <button
        onClick={() => {
          props.getCity(props.inputCity);
          props.getCountry(props.inputCountry);
          fetch(
            `https://api.weatherbit.io/v2.0/current?city=${props.inputCity}&country=${props.inputCountry}&key=963d857d4ba143be9d03b75c19f22728&include=minutely&lang=ru`
          )
            .then((res) => res.json())
            .then((data) => props.getWeather(data));
        }}
      >
        OK
      </button>
    </div>
  );
};
export default SearchInput;
