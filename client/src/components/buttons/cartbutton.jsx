import React, { useState } from "react";
import "../../Styles/cartbutton.css";

function AddToCartButton({ productId, initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  function handleClick() {
    // Add the product to the cart with the current quantity
    addProductToCart(productId, quantity);
  }

  return (
    <div>
      <button onClick={handleClick}>Add to Cart</button>
      <input
        type="number"
        value={quantity}
        readOnly
        onChange={(e) => setQuantity(e.target.value)}
      />
    </div>
  );
}

export default AddToCartButton;
