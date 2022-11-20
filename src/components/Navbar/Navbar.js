import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={`${style.wrapper} container`}>
        <div className={style.logo}>
          <NavLink to='/' end>
            Book App
          </NavLink>
        </div>
        <nav className={style.menu}>
          <li>
            <NavLink to='/broken-necklace' className={`${style.link}`}>
              Broken Necklace Problems
            </NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
