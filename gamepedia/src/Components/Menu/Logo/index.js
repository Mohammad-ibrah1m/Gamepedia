import React from "react";
import Style from "./styles.module.css";

const Logo = () => {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.logoContainer}>
        <div className={Style.imgContainer}>
          <img src="./assets/images/logo.png" />
        </div>
        <div className={Style.text1}>UPROAR</div>
        <div className={Style.text2}>beta</div>
      </div>
    </div>
  );
};

export default Logo;
