import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import modem from "../dialup-short.mp3";

import "./Home.css";

export default function Home() {
  const [screenName, setScreenName] = useState("");
  const [playSound] = useSound(modem, { volume: 1.0 });

  let navigate = useNavigate();

  const handleScreenNameChange = (event) => {
    setScreenName(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    localStorage.setItem("screenName", screenName);
    playSound();

    navigate("/connecting");
  };

  return (
    <div className="home-container">
      <div className="sign-on">
        <form name="login" className="sign-in-form" onSubmit={handleSignIn}>
          <input
            type="text"
            autoFocus="autofocus"
            value={screenName}
            onChange={handleScreenNameChange}
            className="screen-name-input-field"
          />
          <button className="sign-in-button">Enter</button>
        </form>
      </div>
    </div>
  );
}
