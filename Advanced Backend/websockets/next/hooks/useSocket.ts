"use client"
import { useState, useEffect } from "react";

type SocketHookReturnType = [WebSocket | null, string];

export const useSocket = (): SocketHookReturnType => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState<string>("");

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');

    newSocket.onopen = () => {
      console.log("Connection established");
      setSocket(newSocket);
    };

    newSocket.onmessage = (event) => {
      console.log("Received Message:", event.data);
      setLatestMessage(event.data);
    };

    return () => {
      newSocket.close();
    };
  }, []);

  return [socket, latestMessage];
};
