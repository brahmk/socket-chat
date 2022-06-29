import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import connecting from "../img/dialup.gif";
import "./Home.css";

export default function Home() {
  const [screenName, setScreenName] = useState("");
  let navigate = useNavigate();

  const handleScreenNameChange = (event) => {
    setScreenName(event.target.value);
  };

  const handleSignIn = (event) => {
    localStorage.setItem("screenName", screenName);
    document.getElementById("connecting").style.display = "block";
    navigate("/chat");
  };

  return (
    <div className="home-container">
      <div className="sign-on">
        <img src={connecting} id="connecting" />
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
