import React, { useEffect } from "react";
import connecting from "../img/dialup-slow.gif";
import { useNavigate } from "react-router-dom";

export default function Connecting() {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/chat");
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="sign-on">
        <img src={connecting} id="connecting" />
        <form name="login" className="sign-in-form">
          <input
            type="text"
            autoFocus="autofocus"
            className="screen-name-input-field"
            style={{ display: "none" }}
          />
          <button className="sign-in-button">Enter</button>
        </form>
      </div>
    </div>
  );
}
