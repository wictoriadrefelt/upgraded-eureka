import React, { Fragment, Typography } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "../../Styles/confirmOrder.css";
import Header from "../view/Header";
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  console.log(user.firstName);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const totalPrice = subtotal + shippingCharges;

  console.log(user);

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postcode}, ${shippingInfo.country}`;
  console.log(address);

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/payment");
    console.log("hej");
  };

  return (
    <>
      <Header />
      <Fragment>
        <div className="confirmOrderPageMain">
          <div className="confirmOrderPageContainer">
            <div className="infoCheckoutDiv">
              <div className="customerInfo">
                Customer info
                {/* <div className="flexRow">
                  <p className="confirmOrderParagraph">{user.firstName}</p>
                </div> */}
                <div>
                  <div className="flexRow">
                    <p className="confirmOrderParagraph coral">Adress:</p>
                    <p className="confirmOrderParagraph">
                      {shippingInfo.address}
                    </p>
                  </div>
                  <div className="flexRow">
                    <p className="confirmOrderParagraph coral">City:</p>
                    <p className="confirmOrderParagraph">{shippingInfo.city}</p>
                  </div>
                  <div className="flexRow">
                    <p className="confirmOrderParagraph coral">Postal Code:</p>
                    <p className="confirmOrderParagraph">
                      {shippingInfo.postcode}
                    </p>
                  </div>
                  <div className="flexRow">
                    <p className="confirmOrderParagraph coral">Country:</p>
                    <p className="confirmOrderParagraph">
                      {shippingInfo.country}
                    </p>
                  </div>
                </div>
              </div>
              <div className="cost">
                Cost
                <div>
                  <div className="flexRow">
                    <p className="confirmOrderParagraph coral">
                      Your products:
                    </p>
                    <p className="confirmOrderParagraph">{shippingCharges}</p>
                  </div>
                  <div className="flexRow">
                    <p className="confirmOrderParagraph coral">
                      Shipping-charges:
                    </p>
                    <p className="confirmOrderParagraph">{subtotal}</p>
                  </div>
                  <div className="flexRow">
                    <p></p>
                    <p></p>
                  </div>
                  <div className="flexRow">
                    <p className="confirmOrderParagraph coral">
                      Total coins to pay:
                    </p>
                    <p className="confirmOrderParagraph">{totalPrice}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="coral toStripeBtn" onClick={proceedToPayment}>
                Proceed To Payment
              </button>
            </div>
            <Link className="backBtnConfirmOrder" to={`/shipping`}>
              Back
            </Link>
          </div>

          <div className="stars"></div>
          <div className="twinkleMask"></div>
          <div className="twinkleMask2"></div>
        </div>
      </Fragment>
    </>
  );
};

export default ConfirmOrder;
