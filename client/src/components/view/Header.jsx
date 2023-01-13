import "../../Styles/header.css";
import React, { useRef, useEffect } from "react";
import logo from "../../assets/Bg/image.png";
import lives from "../../assets/Bg/ice-climbers-break.png";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="lifeDiv headerDiv">
          <img className="lives" src={lives} alt="" />
        </div>
        <div className="logoDiv headerDiv">
          <img className="logoImg" src={logo} alt="" />
        </div>
        <div className="cartDiv headerDiv">
          <div className="points">000000</div>
          <div className="cartImg"></div>
          <div className="cartNumber"></div>
        </div>
        <div className="loginDiv headerDiv">Login</div>
      </div>
    </>
  );
};

export default Header;
