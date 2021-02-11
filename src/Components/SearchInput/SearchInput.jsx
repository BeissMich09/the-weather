import React from "react";
import Input from "./Input/Input";
import style from "./SearchInput.module.css";

const SearchInput = (props) => {
  console.log(props.inputCity);
  let valueCity = props.inputCity;

  return (
    <div className={style.component}>
      <div className={style.names}>
        <Input
          lable="Город"
          inputType="text"
          value={props.inputCity}
          onChange={(e) => props.getInputCity(e.target.value)}
        />
        <Input
          lable="Страна"
          inputType="text"
          value={props.inputCountry}
          onChange={(e) => props.getInputCountry(e.target.value)}
        />
      </div>
      <div className={style.date}>
        <Input
          lable="Дата начала"
          inputType="date"
          value={props.inputStartData}
          onChange={(e) => props.getStartData(e.target.value)}
        />
        <Input
          lable="Дата конца"
          inputType="date"
          value={props.inputEndData}
          onChange={(e) => props.getEndData(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          props.getInputs(
            valueCity,
            props.inputCountry,
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        Найти
      </button>
    </div>
  );
};
export default SearchInput;
