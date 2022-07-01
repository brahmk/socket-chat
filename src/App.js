import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import useSocket from "use-socket.io-client";
import Home from "./components/Home";
import ChatRoom from "./components/ChatRoom";
import Connecting from "./components/Connecting";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chat" element={<ChatRoom />} />
        <Route exact path="/connecting" element={<Connecting />} />
      </Routes>
    </Router>
  );
}

export default App;
