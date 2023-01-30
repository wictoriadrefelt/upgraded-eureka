import { Route, Routes, useNavigate } from "react-router-dom";
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
import AboutUs from "../pages/aboutUs";

const Content = () => {
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
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default Content;
