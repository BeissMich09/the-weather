import React from "react";
import Input from "./Input/Input";
import style from "./SearchInput.module.css";

const SearchInput = (props) => {
  console.log(props.inputCity);
  let valueCity = props.inputCity;

  return (
    <div className={style.component}>
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
      {/* {props.historycalWeather !== undefined ? ( */}
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
      {/* ) : null} */}

      {/* <div className={style.input}>
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
      </div> */}
      {/* <Input
        label={"Страна"}
        inputType="date"
        value={props.inputCountry}
        // onChange={}
      /> */}
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
