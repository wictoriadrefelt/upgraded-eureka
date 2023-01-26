import { getProducts } from "../../actions/productAction";
import React from "react";
import "../../Styles/productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      {/*  */}
      <div className="productCard">
        <Link className="imgDiv" to={`/product/${product._id}`}>
          <img className="productImg" src={product.image} alt={product.image} />
        </Link>

        <div className="infoDiv">
          <Link to={`/product/${product._id}`}>
            <h3 className="name">{product.name}</h3>
            <p className="description">{product.desc}</p>
          </Link>
          <div className="buyOptions">
            <span className="price">{product.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
