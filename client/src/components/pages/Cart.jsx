import React, { Link, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemFromCart,
  decreaseItemsToCart,
} from "../../actions/cartAction";
import Header from "../view/Header";
import tallpipe from "./../../assets/Bg/tallpipe.png";
import shortpipe from "./../../assets/Bg/shortpipe.png";
import flower from "./../../assets/Bg/flower1.jpg";
import TermsAndConditions from "./Terms";
import "../../Styles/terms.css";

const Cart = () => {
  const navigate = useNavigate();
  document.title = "IneedIT Cartpage";
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (product) => {
    // Function for checking unit >= quantity
    dispatch(addItemsToCart(product));
  };

  const decreaseQuantity = (product) => {
    // Function for checking unit >= quantity
    dispatch(decreaseItemsToCart(product));
  };

  const deleteItem = (product) => {
    dispatch(removeItemFromCart(product));
  };

  const [accepted, setAccepted] = useState(false);

  const handleAccept = (accept) => {
    setAccepted(accept);
  };

  const goToCheckout = () => {
    navigate("/shipping");
  };

  return (
    <>
      <Header />
      <>
        <div className="cartPageMain">
          <div className="toCheckout">
            <TermsAndConditions onAccept={handleAccept}>
              <div className="visible">
                {/* <button disabled={!accepted}>Proceed to Checkout</button> */}
              </div>
            </TermsAndConditions>
            <p className="checkoutBtn">Insert Coins To Begin</p>
            <br />
            <p
              className="checkoutClickMe"
              disabled={!accepted}
              onClick={goToCheckout}
            >
              ...Click here...
            </p>
          </div>

          <div className="leftFooterImg">
            <img className="imgLeft" src={tallpipe} alt="tallpipe" />
            <img className="flower-8s" src={flower} alt="" />
          </div>
          <div className="rightFooterImg">
            <img className="imgRight" src={shortpipe} alt="shortpipe" />
            <img className="flower-5s" src={flower} alt="" />
          </div>
          <div className="cartContainer">
            <div className="cartContent">
              <div className="fixed-center">
                <h2 className="cartTitle">Kundvagn</h2>
              </div>
              {cartItems &&
                cartItems.map((item) => (
                  <div className="cartItem" key={item.product}>
                    <CartItemCard
                      item={item}
                      deleteItem={deleteItem}
                      key={"_id"}
                    />
                    <div className="cartDetails">
                      <div className="btns">
                        <button
                          className="amount add"
                          onClick={() => decreaseQuantity(item.product)}
                        >
                          -
                        </button>
                        <p className="amountNumber">{item.quantity}</p>
                        <button
                          className="amount decrease"
                          /* disabled={item.quantity >= item.unit} */
                          onClick={() => {
                            console.log("asdasd");
                            increaseQuantity(item.product);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="itemPrice">
                        <p>{item.product.price * item.quantity}</p>
                      </div>
                    </div>
                    {/* PRICE FOR ONE PRODUCT  */}
                  </div>
                ))}
              {/*PRICE FOR TOTAL CART*/}
              <div className="totalPriceCart">
                <p className="priceFontSize">Total price:</p>
                <p className="priceFontSize">
                  {cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.product.price,
                    0
                  )}
                </p>
                <p className="priceFontSize"> :-</p>
              </div>
            </div>
          </div>
          <div className="stars"></div>
          <div className="twinkleMask"></div>
          <div className="twinkleMask2"></div>
        </div>
      </>
    </>
  );
};

export default Cart;
