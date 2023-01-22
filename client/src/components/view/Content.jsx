import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Contact from "../pages/ContactUs";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Header from "../view/Header";
import Starwars from "../pages/comp";

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
      </Routes>
    </>
  );
};

export default Content;
