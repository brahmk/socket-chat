import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [roomName, setRoomName] = useState("");

  const handleRoomChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="chat room"
        value={roomName}
        onChange={handleRoomChange}
        className="text-input-field"
      />
      <Link to={`/chat`} className="enter-room-button">
        Join Chat
      </Link>
    </div>
  );
}
