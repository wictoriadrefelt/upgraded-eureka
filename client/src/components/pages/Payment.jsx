import React, { useRef, Typography } from "react";

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
import { Navigate, useNavigate } from "react-router-dom";

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
        console.log("error");
      } else {
        if (result.paymentIntent.status === "succeeded") {
          localStorage.removeItem("cartItems");
          localStorage.removeItem("shippingInfo");

          console.log(result);
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));
          navigate("/success");
        } else {
          console.log("Failed");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <form className="form--payment" onSubmit={(e) => submitHandler(e)}>
        <div>
          <CardNumberElement className="paymentInput" />
        </div>
        <div>
          <CardExpiryElement className="paymentInput" />
        </div>
        <div>
          <CardCvcElement className="paymentInput" />
        </div>

        <div>{orderInfo && orderInfo.totalPrice}</div>
        <input
          type="submit"
          value={`Click me`}
          ref={payBtn}
          className="form--payment--button"
        />
      </form>
    </div>
  );
};

export default Payment;
