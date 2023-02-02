import "../../Styles/header.css";
import React, { useRef, useEffect } from "react";
import logo from "../../assets/Bg/image.png";
import lives from "../../assets/Bg/323750053_481710913944178_1905310230362202522_n.png";
import cartLogo from "../../assets/Bg/shopping_cart_PNG73.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import contactPhone from "../../assets/Bg/phone.png";
import { logout } from "../../actions/userAction";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user, "userAllthetime");

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="headerContainer">
        <div className="lifeDiv headerDiv">
          <img className="lives" src={lives} alt="" />
          <img className="lives" src={lives} alt="" />
          <img className="lives" src={lives} alt="" />
        </div>
        <Link className="logoDiv headerDiv" to={`/home`}>
          <img className="logoImg" src={logo} alt="" />
        </Link>
        <div className="cartDiv headerDiv">
          <div className="points">
            {`0000`}
            {cartItems
              ? cartItems.reduce((accum, item) => accum + item.quantity, 0)
              : "0"}
          </div>
          <div className="headerDiv">
            <div className="cartLoginDiv headerDiv">
              <Link className="headerDiv" to={`/cart/`}>
                <img className="cartImg" src={cartLogo} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="headerDiv">
          <div className="header-column headerDiv">
            <Link className="" to={`/login/`}>
              {user ? (
                <div onClick={logoutUser} className="about">
                  Logout
                </div>
              ) : (
                <div className="about">Login</div>
              )}
            </Link>
            <Link className="" to={`/aboutus/`}>
              <div className="about">AboutUs</div>
            </Link>
          </div>
          <Link className="headerDiv" to={`/contact/`}>
            <img className="contactImg" src={contactPhone} alt="contactPhone" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
