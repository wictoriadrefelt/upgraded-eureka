import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../actions/productAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addItemsToCart } from "../../actions/cartAction";
import "../../Styles/productDetails.css";
import { Link } from "react-router-dom";
import Header from "../view/Header";

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

  const decreaseQuantity = () => {
    if (1 >= quantity) {
      return;
    }
    const qty = quantity - 1;
    setQuantity(qty);
    console.log(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    console.log("product added");
  };

  const { product } = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <Header></Header>
      <Link to={`/`}>
        <span className="back">Back</span>
      </Link>
      <div className="singlepageMain">
        <div className="singlepageContainer">
          <div className="singlepageDiv">
            <div className="imgDiv">
              <img className="singleImg" src={product.image} alt="" />
            </div>
            <div className="singleProductInfo">
              <span className="inline-block bg padding-and-border">
                <h3>{product.name}</h3>
              </span>
              <div className="bg padding-and-border gap">
                <p className="singleDesc">{product.desc}</p>
                <div className="stockInfo">
                  <div className="stock">
                    <p>Avaliable:</p>
                    <p className={product.unit < 1}>
                      {product.unit < 1 ? "Not in stock" : "In stock"}
                    </p>
                  </div>
                  <p className="singlePrice padding-and-border bg">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="flex-justify-space">
                <button onClick={addToCartHandler}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
