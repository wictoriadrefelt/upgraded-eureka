import React from "react";
import "../../Styles/cart.css";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const item = {
    product: "productID",
    price: 100,
    name: "blubb",
  };
  {
    return (
      <>
        <div className="cartPageMain">
          <div className="cartContainer">
            <div className="cartContent">
              <h2 className="cartTitle">Kundvagn</h2>
              <CartItemCard item={item} />
            </div>
            <div className="toCheckout">
              <p className="checkoutBtn">Insert Coins To Begin</p>
              <br />
              <p className="checkoutClickMe">...Click here...</p>
            </div>
          </div>
          <div className="stars"></div>
          <div className="twinkleMask"></div>
          <div className="twinkleMask2"></div>
          <div className="leftFooterImg">
            <img
              className="imgLeft"
              src="./src/assets/bg/tallpipe.png"
              alt=""
            />
          </div>
          <div className="rightFooterImg">
            <img
              className="imgRight"
              src="./src/assets/bg/shortpipe.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
