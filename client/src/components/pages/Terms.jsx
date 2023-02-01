import React, { useState } from "react";

const TermsAndConditions = ({ onAccept }) => {
  document.title = "IneedIT Terms and condition";
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleChange = (event) => {
    setAccepted(event.target.checked);
    onAccept(event.target.checked);
  };

  return (
    <div className="terms-container">
      <button className="collapsible" onClick={() => setIsOpen(!isOpen)}>
        Terms and Conditions
      </button>
      {isOpen && (
        <div className="termsContent">
          <h2>Terms and Conditions</h2>
          <p>
            By accessing or using our website, you agree to be bound by the
            terms and conditions set forth below. If you do not wish to be bound
            by these terms and conditions, you may not access or use our
            website.
          </p>
          <h3>Use of Website</h3>
          <p>
            You may only use this website for lawful purposes and in accordance
            with these terms and conditions. You agree not to use this website
            in any way that may impair the performance, corrupt or manipulate
            the content or information available on the website or reduce the
            overall functionality of the website.
          </p>
        </div>
      )}

      <div className="agreeLabel">
        <input
          className="checkBoxTerms"
          type="checkbox"
          id="terms-checkbox"
          checked={accepted}
          onChange={handleChange}
        />
        <label htmlFor="terms-and-conditions">
          I accept the terms and conditions
        </label>
      </div>
    </div>
  );
};

export default TermsAndConditions;
