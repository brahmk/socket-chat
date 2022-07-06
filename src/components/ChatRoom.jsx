import React, { useState, useEffect } from "react";
import useChat from "./useChat";
import "./ChatRoom.css";
import useSound from "use-sound";
import im from "../imsend.wav";

export default function ChatRoom(screenName) {
  const roomId = screenName;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const [imSound] = useSound(im, { volume: 1.0 });

  useEffect(() => {
    document.querySelector(".scrollbox").scrollTop =
      document.querySelector(".scrollbox").scrollHeight;
  }, [messages]);

  //

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
    imSound();
  };

  return (
    <div className="chatroom">
      <div className="window">
        <div className="scrollbox">
          {messages.map((message, i) => (
            <>
              <p key={i} className={"im"}>
                <span className={"screen-name1"}>{message.screenName}</span>:{" "}
                {message.body}
              </p>

              <p className={"im"}>
                <span className={"screen-name2"}>user_7615</span>:{" "}
                {message.response}
              </p>
            </>
          ))}
        </div>
        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            name="messageBox"
            autoFocus="autofocus"
            value={newMessage}
            onChange={handleNewMessageChange}
            className="message-input"
            autoComplete="off"
          ></input>

          <button className="send-button">send</button>
        </form>
      </div>
    </div>
  );
}
