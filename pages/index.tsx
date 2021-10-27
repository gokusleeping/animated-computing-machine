import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const Index = () => {
  const [socket, setSocket] = useState<Socket>(null);

  const handleWS = () => {
    const socket = io("ws://localhost:8080").connect();
    setSocket(socket);

    socket.on("connect", () => {
      console.log(`Connected to WS`);
    });

    socket.on("event", (data) => {
      console.log({ data });
    });
  };

  useEffect(() => {
    handleWS();
  }, []);

  return (
    <div className="">
      <button onClick={() => socket.emit("event", "data")}>Emit</button>
    </div>
  );
};

export default Index;
