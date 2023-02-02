import { BrowserRouter } from "react-router-dom";
import Layout from "./components/view/Layout.jsx";
import React, { useState, useRef, useEffect } from "react";
import Modal from "./components/view/Modal.jsx";
import { useCookies } from "react-cookie";
import "./App.css";
import { useSelector } from "react-redux";
import axios from "axios";
import backgroundSound from "./assets/Sounds/backg.mp3";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [isAccepted, setIsAccepted] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  function handleClick() {
    const token = "myAuthToken1234567890"; //replace with your actual token
    setCookie(
      "user",
      "Cookies accepted",
      /* token */ {
        path: "/",
        expires: new Date(Date.now() + 60 * 60 * 1000),
      }
    );
    setIsAccepted(true);
  }

  function handleDecline() {
    console.log("cookie declined");
    removeCookie("user");
    setIsAccepted(false);
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.5;
    }
  };

  const handleUserInteraction = () => {
    audioRef.current.muted = false;
  };

  return (
    <BrowserRouter>
      <div>
        <span className="play" onClick={handleUserInteraction}>
          <audio
            src={backgroundSound}
            autoPlay={isPlaying}
            loop={isPlaying}
            ref={audioRef}
            volume={0}
          />
          <button className="funTimes" onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </span>

        {
          /* ! */ isAccepted && (
            <div className="cookie-accept">
              <h3>
                {" "}
                We use cookies to enhance your browsing experience and to
                personalize content and ads. By continuing to use our website,
                you consent to our use of cookies.
              </h3>
              {/* {cookies.user && <p>{cookies.user}</p>} */}
              <div className="cookie-btn-container">
                <button className="cookie-btn" onClick={handleClick}>
                  I accept
                </button>
                <button className="cookie-btn" onClick={handleDecline}>
                  I don't accept
                </button>
              </div>
            </div>
          )
        }
      </div>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
