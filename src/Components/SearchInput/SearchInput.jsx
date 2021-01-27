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
        }}
      >
        OK
      </button>
    </div>
  );
};
export default SearchInput;
