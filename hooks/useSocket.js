import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState(null);

  const LOCAL_IP = process.env.NEXT_PUBLIC_LOCAL_IP;

  useEffect(() => {
    const socketIo = io(`http://${LOCAL_IP}:8080`); // Backend URL

    setSocket(socketIo);

    return () => {
      socketIo.disconnect(); // Cleanup connection on component unmount
    };
  }, []);

  return socket;
};

export default useSocket;
