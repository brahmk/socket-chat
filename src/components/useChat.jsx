import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import useBot from "./useBot";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";

export default function useChat(roomId) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();
  const screenName = localStorage.getItem("screenName");
  const { generateResponse } = useBot();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    let response = generateResponse(messageBody);
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      screenName,
      response,
      senderId: socketRef.current.id,
    });
  };
  return { messages, sendMessage };
}
