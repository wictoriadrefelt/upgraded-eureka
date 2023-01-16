import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../actions/productAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.unit <= quantity) {
      return;
    }

    const qty = quantity + 1;
    setQuantity(qty);
    console.log(qty);
  };

  const decreseQuantity = () => {
    if (1 >= quantity) {
      return;
    }
    const qty = quantity - 1;
    setQuantity(qty);
    console.log(qty);
  };

  const { product } = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {product.name}
      <button onClick={decreseQuantity}>-</button>
      <input value={quantity} type="number" />
      <button onClick={increaseQuantity}>+</button>
      <button>Add to Cart</button>
      Avaliable:
      <p className={product.unit < 1 ? "black" : "white"}>
        {product.unit < 1 ? "Not in stock" : "In stock"}
      </p>
      <p className="">{product.desc}</p>
    </div>
  );
};

export default ProductDetails;
