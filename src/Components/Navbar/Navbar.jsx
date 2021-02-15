import React from "react";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div
      className={style.item}
      onClick={() => {
        props.getInputs(
          props.item.city,
          props.item.country,
          props.inputStartData,
          props.inputEndData
        );
      }}
    >
      <p>{props.item.city}, </p>
      <p>{props.item.country}</p>
    </div>
  );
};
export default Navbar;
