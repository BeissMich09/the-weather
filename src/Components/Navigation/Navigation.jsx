import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.header}>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.activeLink}
          to="/weather"
        >
          Текущая погода
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.activeLink}
          to="/airquality"
        >
          Текущее загрязнение
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
