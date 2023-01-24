import React, { Link } from "react";
import "../../Styles/cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemFromCart } from "../../actions/cartAction";
import Header from "../view/Header";
import tallpipe from "./../../assets/Bg/tallpipe.png";
import shortpipe from "./../../assets/Bg/shortpipe.png";
import flower from "./../../assets/Bg/flower.png";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, unit) => {
    const newQty = quantity + 1;
    if (unit <= quantity) {
      return;
    } else {
      dispatch(addItemsToCart(id, newQty));
    }
  };

  const decreaseQuantity = (id, quantity, unit) => {
    const newQty = quantity - 1;
    if (unit <= quantity || 1 > quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const checkoutHander = () => {};
  {
    return (
      <>
        <Header></Header>
        {cartItems.length === 0 ? (
          <>
            <div className="emptyCart">"Nothing to see here"</div>
            <Link to="/products">View our amazing collection</Link>
          </>
        ) : (
          /// PLACE DIVS FOR EMPTY CART HERE AFTER LINE 35
          <>
            <div className="cartPageMain">
              <div className="toCheckout">
                <p className="checkoutBtn">Insert Coins To Begin</p>
                <br />
                <p className="checkoutClickMe">...Click here...</p>
              </div>
              <div className="leftFooterImg">
                <img className="imgLeft" src={tallpipe} alt="tallpipe" />
                <img className="flower" src={flower} alt="" />
              </div>
              <div className="rightFooterImg">
                <img className="imgRight" src={shortpipe} alt="shortpipe" />
                <img className="flower" src={flower} alt="" />
              </div>
              <div className="cartContainer">
                <div className="cartContent">
                  <h2 className="cartTitle">Kundvagn</h2>
                  {cartItems &&
                    cartItems.map((item) => (
                      <div className="cartItem" key={item.product}>
                        <CartItemCard item={item} deleteItem={deleteItem} />
                        <div className="cartDetails">
                          <div className="btns">
                            <button
                              className="amount add"
                              onClick={() =>
                                decreaseQuantity(
                                  item.product,
                                  item.quantity,
                                  item.unit
                                )
                              }
                            >
                              -
                            </button>
                            <input
                              className="amountNumber"
                              type="number"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              className="amount decrease"
                              onClick={() =>
                                increaseQuantity(
                                  item.product,
                                  item.quantity,
                                  item.unit
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                          <div className="itemPrice">
                            <p>{item.price * item.quantity}</p>
                          </div>
                        </div>
                        {/* PRICE FOR ONE PRODUCT  */}
                      </div>
                    ))}

                  {/*PRICE FOR TOTAL CART*/}
                  <p>
                    {cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}
                  </p>
                </div>
              </div>

              <div className="stars"></div>
              <div className="twinkleMask"></div>
              <div className="twinkleMask2"></div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default Cart;
