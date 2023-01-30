import React, { useRef, useEffect } from "react";
import "../../Styles/contact.css";
import Header from "../view/Header";
import PacmansBuddies from "../../assets/pacman.png";
import Pacman from "../../assets/pac.png";

const Contact = () => {
  {
    document.title = "IneedIT ContactUs";
    const formRef = useRef(null);

    useEffect(() => {
      const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        // You can use formData.get(name) to get the value of a specific form field.
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        // Save the form data to the database or somewhere else.
      };

      formRef.current.addEventListener("submit", handleSubmit);
    }, []);

    return (
      <>
        <Header />
        <div className="cartpageMain">
          <div className="stars"></div>
          <div className="twinkleMask"></div>
          <div className="twinkleMask2"></div>
          <div className="container">
            <div className="containerDiv">
              <div className="contentDiv">
                <div className="right-side">
                  <div className="topic-text">Kontakta oss</div>
                  <form action="#" ref={formRef}>
                    <div className="input-box">
                      <input type="text" placeholder="Namn" name="name" />
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Email" name="email" />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Telefonnummer"
                        name="phone"
                      />
                    </div>
                    <div className="input-box message-box">
                      <input
                        type="text"
                        placeholder="Skriv ditt meddelande här"
                        name="message"
                      />
                    </div>
                    <div className="button">
                      <button
                        className="sendMsgBtn"
                        type="submit"
                        value="Skicka meddelande"
                      >
                        Skicka meddelande
                      </button>
                    </div>
                  </form>
                </div>
                <img className="hunted" src={Pacman} alt="" />
              </div>
            </div>
          </div>
          <div className="bottomDiv">
            <img className="imgs" src={PacmansBuddies} alt="" />
          </div>
        </div>
      </>
    );
  }
};

export default Contact;
