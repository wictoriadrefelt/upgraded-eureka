import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteItem }) => {
  return (
    <div>
      <img alt="productImage" />
      <Link to={`/product/${item.product}`}>{item.name}</Link>
      <span>{`Price: ${item.price}`}</span>
      <p onClick={() => deleteItem(item.product)}>Remove</p>
    </div>
  );
};

export default CartItemCard;
