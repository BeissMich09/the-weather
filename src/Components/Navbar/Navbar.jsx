import React from "react";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={style.item}>
      <div
        onClick={() => {
          props.getInputs(
            "Moscow",
            "Russia",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        Moscow, Russia
      </div>
      <div
        onClick={() => {
          props.getInputs(
            "StPetersburg",
            "Russia",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        Saint Petersburg, Russia
      </div>
      <div
        onClick={() => {
          props.getInputs(
            "Sochi",
            "Russia",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        Sochi, Russia
      </div>
      <div
        onClick={() => {
          props.getInputs(
            "Kaliningrad",
            "Russia",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        Kaliningrad, Russia
      </div>
      <div
        onClick={() => {
          props.getInputs(
            "Berlin",
            "Germany",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        Berlin, Germany
      </div>
      <div
        onClick={() => {
          props.getInputs(
            "Munich",
            "Germany",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        Munich , Germany
      </div>
      <div
        onClick={() => {
          props.getInputs(
            "New York",
            "USA",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        New York , USA
      </div>
      <div
        onClick={() => {
          props.getInputs(
            "London",
            "US",
            props.inputStartData,
            props.inputEndData
          );
        }}
      >
        London, Great Britain
      </div>
    </div>
  );
};
export default Navbar;
