import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../actions/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);
  console.log(product);
  return (
    <div>
      {product.name}
      <button>-</button>
      <input value="1" type="number" />
      <button>+</button>
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
