import React, { Fragment, Typography, Link } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  console.log(cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const totalPrice = subtotal + shippingCharges;

  console.log(user.firstName);

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
    <Fragment>
      {user.firstName}

      <button onClick={proceedToPayment}>Proceed To Payment</button>
    </Fragment>
  );
};

export default ConfirmOrder;
