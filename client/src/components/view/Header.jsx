import "../../Styles/header.css";
import React, { useRef, useEffect } from "react";
import logo from "../../assets/Bg/image.png";
import lives from "../../assets/Bg/323750053_481710913944178_1905310230362202522_n.png";
import cartLogo from "../../assets/Bg/shopping_cart_PNG73.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="lifeDiv headerDiv">
          <img className="lives" src={lives} alt="" />
          <img className="lives" src={lives} alt="" />
          <img className="lives" src={lives} alt="" />
        </div>
        <Link className="logoDiv headerDiv" to={`/`}>
          <img className="logoImg" src={logo} alt="" />
        </Link>
        <div className="cartDiv headerDiv">
          <div className="points">000000</div>
          <div className="headerDiv">
            <div className="cartLoginDiv headerDiv">
              <Link className="headerDiv" to={`/cart/`}>
                <img className="cartImg" src={cartLogo} alt="" />
              </Link>
              <div className="loginDiv headerDiv">Login</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
