import React from "react";
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <img src="./img/logo.png" />

      <h1 className={style.name}>HSocial</h1>
    </header>
  );
};

export default Header;
