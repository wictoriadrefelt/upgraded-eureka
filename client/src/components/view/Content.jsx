import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Landing from "../pages/Landing";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Contact from "../pages/ContactUs";
import Cart from "../pages/Cart";
import Header from "../view/Header";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/" element={<Products />} />
        <Route path="/singleProduct" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
};

export default Content;
