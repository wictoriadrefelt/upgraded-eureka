import React from "react";
import "../../Styles/products.css";
import { Link } from "react-router-dom";
import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {/*  <div className="container">
        <div className="sidepanel left">
          <img
            className="sideImg"
            src="./src/assets/Bg/316997603_679055293695797_527218043518299893_n.png"
            alt=""
          />
        </div>
        <div className="sidepanel right">
          <img
            className="sideImg"
            src="./src/assets/Bg/317251088_2363217130523164_5796761618442374814_n.png"
            alt=""
          />
        </div> */}
      <div className="products">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
      {/*  </div>
        <div className="stars"></div>
        <div className="twinkleMask"></div>
        <div className="twinkleMask2"></div>
      </div> */}
    </>
  );
};

export default Products;
