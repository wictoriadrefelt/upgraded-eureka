import React from "react";
import "../../Styles/cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity, stock) => {
    const newQty = quantity - 1;
    if (stock <= quantity || 1 > quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  {
    return (
      <>
        <div className="cartPageMain">
          <div className="cartContainer">
            <div className="cartContent">
              <h2 className="cartTitle">Kundvagn</h2>
              {cartItems &&
                cartItems.map((item) => (
                  <>
                    <CartItemCard item={item} />
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity, item.unit)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(item.product, item.quantity, item.unit)
                      }
                    >
                      +
                    </button>
                    {/* PRICE FOR ONE PRODUCT  */}
                    <p>{item.price * item.quantity}</p>
                  </>
                ))}

              {/*PRICE FOR TOTAL CART*/}
              <p>{`600`}</p>
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
              alt="pipe"
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
