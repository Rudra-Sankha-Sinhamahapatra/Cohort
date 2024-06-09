import { useState } from 'react';
import './App.css';
import { useSocket } from './hooks/useSocket';

function App() {
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
    <div>
      <input
        type="text"
        placeholder='Send Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>Last received message: {latestMessage}</div>
    </div>
  );
}

export default App;
