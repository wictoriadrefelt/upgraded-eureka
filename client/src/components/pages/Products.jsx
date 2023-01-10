import React from "react";
import "../../Styles/products.css";

const Products = () => {
  {
    return (
      <>
        <div className="container">
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
          </div>
          <div className="content"></div>
          <div className="stars"></div>
          <div className="twinkleMask"></div>
          <div className="twinkleMask2"></div>
        </div>
      </>
    );
  }
};

export default Products;
