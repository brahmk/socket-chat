import React, { useState } from "react";
import useChat from "./useChat";
import "./ChatRoom.css";
import useSound from "use-sound";
import im from "../imsend.wav";

export default function ChatRoom(props) {
  const roomId = "chat";
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const [playSound] = useSound(im, { volume: 1.0 });

  //

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
    playSound();
  };

  return (
    <div className="chatroom">
      <div className="window">
        <div className="scrollbox">
          {messages.map((message, i) => (
            <p
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              <span
                className={`${
                  message.ownedByCurrentUser ? "screen-name1" : "screen-name2"
                }`}
              >
                {message.screenName}
              </span>{" "}
              : {message.body} <p>{message.response}</p>
            </p>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button"></button>
      </div>
    </div>
  );
}
