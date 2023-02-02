import React, { useRef, useEffect } from "react";
import "../../Styles/payment.css";

import { useSelector, useDispatch } from "react-redux";

import {
  CardNumberElement,
  useStripe,
  useElements,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import axios from "axios";
import { createOrder } from "../../actions/orderAction";
import { useNavigate, Link } from "react-router-dom";
import "../../Styles/payment.css";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  //const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  console.log(paymentData);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  console.log(order);

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/payment",
        paymentData,
        config
      );

      const client_secret = data.client_secret;
      console.log(client_secret, "client sec", typeof client_secret);

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.firstName,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              postal_code: shippingInfo.postcode,
              country: shippingInfo.country,
            },
          },
        },
      });
      if (!result) {
        payBtn.current.disabled = false;
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          navigate("/success");
          console.log("successs");
        } else {
          console.log("no");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  useEffect(() => {}, [dispatch]);

  return (
    <div className="paymentPageMain">
      <div className="stars"></div>
      <div className="twinkleMask"></div>
      <div className="twinkleMask2"></div>
      <div className="paymentPageContainer">
        <form className="form--payment" onSubmit={(e) => submitHandler(e)}>
          <h3 className="payment-title">Enter your cards credentials</h3>
          <div>
            <p className="payment-paragraph">Okay so enter your cardnumber</p>
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <p className="payment-paragraph">And its dates</p>
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <p className="payment-paragraph">And the three on the back</p>
            <CardCvcElement className="paymentInput" />
          </div>
          <div className="payment-title">
            {orderInfo && orderInfo.totalPrice}
          </div>
          <input
            type="submit"
            value={`Click me`}
            ref={payBtn}
            className="form--payment--button"
          />
        </form>
        <Link className="backBtnPayment" to={`/confirm`}>
          <div className="backBtn">Back</div>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
