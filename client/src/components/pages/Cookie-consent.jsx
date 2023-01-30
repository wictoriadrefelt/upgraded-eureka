import React, { useState } from "react";

function CookieConsentModal() {
  const [showModal, setShowModal] = useState(true);

  function acceptCookies() {
    document.title = "IneedIT Accept Cookies";
    // set a cookie to remember that the user has accepted the use of cookies
    document.cookie =
      "cookies-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    // hide the cookie consent modal
    setShowModal(false);
  }

  return (
    <div>
      {showModal && (
        <div id="cookie-consent-modal">
          <p>
            Our website uses cookies to improve your browsing experience and to
            personalize content and advertisements. By continuing to use our
            website, you consent to our use of cookies. If you want to learn
            more about cookies and how to manage them, please visit our{" "}
            <a href="http://www.example.com/cookie-policy">Cookie Policy</a>.
          </p>
          <button id="accept-cookies" onClick={acceptCookies}>
            Accept
          </button>
        </div>
      )}
    </div>
  );
}

export default CookieConsentModal;
