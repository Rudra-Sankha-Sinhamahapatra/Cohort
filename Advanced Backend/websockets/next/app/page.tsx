"use client"
import { useState } from "react";
import { useSocket } from "@/hooks/useSocket";


export default function Home() {
  const [socket, latestMessage] = useSocket(); 
  const [message, setMessage] = useState("");

  if (!socket) {
    return (
      <div>
        Connecting to the server...
      </div>
    );
  }

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.error('WebSocket not open to send message.');
    }
  };

  return (
<div className="bg-gray-600 flex justify-center items-center min-h-screen min-w-full">
    <div className="text-white">
      <input
      className="bg-black p-3"
        type="text"
        placeholder='Send Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-center">
      <div className="bg-black text-white w-fit px-2 py-1 mt-2">
      <button type="button" onClick={sendMessage}>Send</button>
      </div>
      </div>
      <div>Last received message: {latestMessage}</div>
    </div>
    </div>
  );
}
