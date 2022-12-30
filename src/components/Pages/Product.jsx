import React from "react";
import { getAllProducts } from "./../../../js/allProductPage";

/* const Product = () => {
    
    return(
        //STYLE AND RENDER HERE 
    )
} */

//export default Product;

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => getAllProducts()}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
