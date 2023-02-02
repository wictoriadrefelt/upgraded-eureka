import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Start from "../pages/Start";
import Contact from "../pages/ContactUs";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Header from "../view/Header";
import Starwars from "../pages/comp";
import LoginAndRegister from "../pages/LoginandRegistration";
import Shipping from "../pages/Shipping";
import ConfirmOrder from "../pages/ConfirmOrder";
import Payment from "../pages/Payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "../pages/Success";
import AboutUs from "../pages/aboutUs";
import ProtectedRoute from "../view/ProtectedRoute";
import { useSelector } from "react-redux";

const Content = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");
  const { isAuthenticated, user } = useSelector((state) => state.user);

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "http://localhost:3001/api/v1/stripeapikey"
    );
    /// THIS WORKS
    console.log(data, "hej");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    getStripeApiKey();
  }, []);
  return (
    <>
      <Routes>
        <React.Fragment>
          {stripeApiKey && (
            <Route
              path="/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )}
        </React.Fragment>
        <Route path="/home" element={<Start />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Starwars />} />
        <Route path="/login" element={<LoginAndRegister />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirm" element={<ConfirmOrder />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/success" element={<Success />} />
        {/*  {isAuthenticated && <Route path="/success" element={<Success />} />} */}
        <React.Fragment>
          <Route
            path="/payment"
            element={<ProtectedRoute path="/success" element={<Success />} />}
          />
        </React.Fragment>
      </Routes>
    </>
  );
};

export default Content;
