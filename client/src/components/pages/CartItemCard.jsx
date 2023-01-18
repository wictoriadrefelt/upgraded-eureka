import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/cartItemCard.css";

const CartItemCard = ({ item, deleteItem }) => {
  return (
    <>
      <div className="cartItemCard">
        <Link to={`/product/${item.product}`}>
          <img className="cartImg" src={item.image} alt="productImage" />
        </Link>
        <Link to={`/product/${item.product}`}>
          <p>{item.name}</p>
        </Link>
      </div>
      <div className="removeBtn">
        <p onClick={() => deleteItem(item.product)}>Remove</p>
      </div>
    </>
  );
};

export default CartItemCard;
