import { useEffect, useState, useRef } from "react";
import useBot from "./useBot";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const screenName = localStorage.getItem("screenName");
  const { generateResponse } = useBot();

  const sendMessage = (messageBody) => {
    let response = generateResponse(messageBody);
    let newMessage = {
      body: messageBody,
      screenName,
      response,
    };
    setMessages((messages) => [...messages, newMessage]);
  };
  return { messages, sendMessage };
}
