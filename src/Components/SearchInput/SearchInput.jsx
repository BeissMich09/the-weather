import React from "react";
import style from "./SearchInput.module.css";

const SearchInput = (props) => {
  console.log(props.inputCity);
  let valueCity = props.inputCity;

  return (
    <div className={style.component}>
      <div className={style.input}>
        <p> Город: </p>
        <input
          onChange={(e) => props.getInputCity(e.target.value)}
          type="text"
          value={valueCity}
        />
      </div>
      <div className={style.input}>
        <p> Страна: </p>
        <input
          onChange={(e) => props.getInputCountry(e.target.value)}
          type="text"
          value={props.inputCountry}
        />
      </div>
      <button
        onClick={() => {
          props.getInputs(valueCity, props.inputCountry);
        }}
      >
        Найти
      </button>
    </div>
  );
};
export default SearchInput;
