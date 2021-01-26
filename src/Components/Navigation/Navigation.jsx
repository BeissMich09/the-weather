import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/weather">Текущая погода</NavLink>
      <NavLink to="/airquality">Текущее загрязнение</NavLink>
    </div>
  );
};

export default Navigation;
