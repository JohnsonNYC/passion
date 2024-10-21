import { useEffect, useState } from "react";
import useSocket from "../../hooks/useSocket";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socket = useSocket();

  console.log(socket);
  useEffect(() => {
    if (socket) {
      socket.on("message", (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    }
  }, [socket]);

  const sendMessage = () => {
    if (socket && input) {
      socket.emit("message", input);
      setInput("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatContainer;
