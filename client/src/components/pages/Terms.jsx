import React, { useState } from "react";

const Terms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

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
          <h3>1. Use of Website</h3>
          <p>
            You may only use this website for lawful purposes and in accordance
            with these terms and conditions. You agree not to use this website
            in any way that may impair the performance, corrupt or manipulate
            the content or information available on the website or reduce the
            overall functionality of the website.
          </p>
          <h3>2. Intellectual Property Rights</h3>
          <p>
            The content of this website, including but not limited to text,
            graphics, logos, images, and software, is the property of us or our
            licensors and is protected by international copyright and trademark
            laws. You may not reproduce, distribute, display or commercially
            exploit any of the content without our express permission.
          </p>
        </div>
      )}
      <input
        className="checkBoxTerms"
        type="checkbox"
        id="terms-checkbox"
        checked={isAgreed}
        onChange={() => setIsAgreed(!isAgreed)}
      />
      <label className="agreeLabel" htmlFor="terms-checkbox">
        I agree to the terms and conditions
      </label>
    </div>
  );
};

export default Terms;
