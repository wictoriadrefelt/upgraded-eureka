import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Start from "../pages/Start";
import Contact from "../pages/ContactUs";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
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

const Content = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "http://localhost:3001/api/v1/stripeapikey"
    );
    console.log(data, "hej");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    getStripeApiKey();
  }, []);
  return (
    <>
      <Routes>
        <Route path="*" element={<Start />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/comp" element={<Starwars />} />
        <Route path="/login" element={<LoginAndRegister />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirm" element={<ConfirmOrder />} />
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route path="/payment" element={<Payment />} />
          </Elements>
        )}
      </Routes>
    </>
  );
};

export default Content;
