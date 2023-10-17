import { io } from "socket.io-client";

export const initializeSocket = () => {  
  const socket = io(new URL(import.meta.env.VITE_BACKEND_URL).origin);
  socket.on("connect_error", (err) => {
    console.error(`connect_error due to ${err}`);
  });
  return socket;
};
