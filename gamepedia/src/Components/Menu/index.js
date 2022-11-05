import React from "react";
import Accor from "./Accordion";
import Logo from "./Logo";
import MyGames from "./MyGames";
import Style from "./styles.module.css";

const Menu = () => {
  return (
    <div className={Style.menuContainer}>
      <Logo />
      <Accor/>
      <MyGames/>
    </div>
  );
};

export default Menu;
