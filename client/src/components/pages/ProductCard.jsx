import { getProducts } from "../../actions/productAction";
import React from "react";
import { Link } from "react";
import "../../Styles/productCard.css";
import AddToCartButton from "../buttons/cartbutton";

const ProductCard = ({ product }) => {
  console.log(typeof product.image);
  console.log(product.image);
  return (
    <>
      {/* <div className="container">
        <div className="singlepageDiv">
          <div className="imgDiv">
            <img className="singleImg" src="./src/assets/martin.png" alt="" />
          </div>
          <div className="singleProductInfo">
            <span className="inline-block bg">
              <div className="container" id="container"> */}
      <div className="productCard">
        <div className="imgDiv">
          {/* <img src="data: image/gif;base64,(base 64 image data)" /> */}
          <img src={product.image} alt={product.image} />
        </div>
        <div className="infoDiv">
          <h3 className="name">{product.name}</h3>
          <p className="description">{product.desc}</p>
          <div className="buyOptions">
            <AddToCartButton productId={product.id} initialQuantity={1} />

            <span className="price">{product.price}</span>
          </div>
        </div>
      </div>

      {/* </div>
            </span>
            <div className="bg">
              <p className="singleDesc padding-and-border">
                Få ett inspirerande tal av en klenod i branchen. Uppvuxen på
                skogens svampar och Med 1000 års erfarenhet kan du här få
                pep-talket för att klara av vilken utmaning som helst i din väg
              </p>
            </div>
            <div className="flex-justify-space">
              <button className="singlePrice padding-and-border bg">
                Lägg till i kundvagn
              </button>
              <p className="singlePrice padding-and-border bg">10000</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductCard;
