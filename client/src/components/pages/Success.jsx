import React, { useState, useEffect } from "react";
/* import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"; */
import { Link } from "react-router-dom";
import "../../Styles/success.css";

const Success = ({ success }) => {
  /*   if (!success) {
    return <div>Loading...</div>;
  } */
  document.title = "IneedIT Success";

  return (
    <div className="successPageMain">
      <div className="successContainer">
        <h1 className="successTitle">Congratulations!</h1>
        <p className="successParagraph">Your purchase was successful.</p>
        <p className="successParagraph">
          Thank you for choosing to shop with us. We appreciate your business
          and hope you are completely satisfied with your purchase.
        </p>
        <Link className="successHomeBtn" to={`/home`}>
          <h3 className="successParagraph">
            Click here to get to the startpage
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Success;
