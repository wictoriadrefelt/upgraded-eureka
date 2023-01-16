import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = ({ item }) => {
  return (
    <div>
      <img alt="productImage" />
      <Link to={`/product/${item.product}`}>{item.name}</Link>
      <span>{`Price: ${item.price}`}</span>
      <p>Remove</p>
    </div>
  );
};

export default CartItemCard;
