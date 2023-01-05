import React from "react";
import "../../Styles/contact.css";
import pacman from "../pages/pac.png";

const Contact = () => {
  {
    return (
      <>
        <main>
          <div className="container">
            <div className="stars"></div>
            <div className="twinkleMask"></div>
            <div className="twinkleMask2"></div>

            <div className="containerDiv">
              <div className="contentDiv">
                <div className="right-side">
                  <div className="topic-text">Kontakta oss</div>
                  <form action="#">
                    <div className="input-box">
                      <input type="text" placeholder="Namn" />
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Telefonnummer" />
                    </div>
                    <div className="input-box message-box">
                      <input
                        type="text"
                        placeholder="Skriv ditt meddelande här"
                      />
                    </div>
                    <div className="button">
                      <input type="button" value="Skicka meddelande" />
                    </div>
                  </form>
                </div>
                <img className="hunted" src="./src/assets/pac.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bottomDiv">
            <img className="imgs" src="./src/assets/pacman.png" alt="" />
          </div>
        </main>
      </>
    );
  }
};

export default Contact;
