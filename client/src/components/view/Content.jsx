import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Landing from "../pages/Landing";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Contact from "../pages/ContactUs";

const product = {
  _id: "12",
  name: "white",
  price: "2000",
  image: "bahe.jpg",
};

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/" element={<Products />} />
        <Route path="/singleProduct" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Content;
