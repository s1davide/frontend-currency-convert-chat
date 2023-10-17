import { Socket } from "socket.io-client";

export const initialMessageToServer = (socket: Socket) => {
  const queryParams = new URLSearchParams(location.search);
  const room = queryParams.get("id_room");
  const userName = queryParams.get("name_user");
  socket.emit("join_room", {
    room,
    userName,
    typeConversion: "usdAndCop",
  });
};
