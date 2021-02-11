import React from "react";
import style from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={props.lable === "Город" ? style.itemCity: style.item }>
      <p>{props.lable}:</p>{" "}
      <input
        type={props.inputType}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
