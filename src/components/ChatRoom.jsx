import React, { useState } from "react";
import useChat from "./useChat";

export default function ChatRoom(props) {
  const roomId = "chat";
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  //

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              <span className="screen-name">{message.screenName}</span> :{" "}
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        className="new-message-input-field"
        placeholder="Send a message"
      />
      <button onClick={handleSendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
