import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/cartItemCard.css";

const CartItemCard = ({ item, deleteItem }) => {
  return (
    <>
      <div className="cartItemCard">
        <Link to={`/product/${item.product}`}>
          <img
            className="addedToCartImg"
            src={item.product.image}
            alt="productImage"
          />
        </Link>
        <Link to={`/product/${item.product}`}>
          <p className="cartItemCardTitle">{item.product.name}</p>
        </Link>
      </div>
      <div className="removeBtn">
        <p
          className="cartItemCardRemove"
          onClick={() => deleteItem(item.product)}
        >
          Remove
        </p>
      </div>
    </>
  );
};

export default CartItemCard;
