import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Landing from "../pages/Landing";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Contact from "../pages/ContactUs";
import ProductDetails from "../pages/ProductDetails";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/" element={<Products />} />
        <Route path="/singleProduct" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Content;
