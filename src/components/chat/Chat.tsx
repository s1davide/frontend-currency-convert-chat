import "./Chat.scss";
import "react-chat-elements/dist/main.css";

import { createContext, useEffect, useState } from "react";

import LeftContent from "./chat-components/chat-left-content/ChatLeftContent";
import RightContent from "./chat-components/chat-right-content/ChatRightContent";
import { initializeSocket } from "./socket/socket-configuration";
import { initialMessageToServer } from "./socket/behaviour-socket";
import { Socket } from "socket.io-client";

export type Message = {
  title?: string;
  text: string;
  date: Date;
  sender: "user" | "server";
};

export const ChatContext = createContext<{
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  socketInstance: Socket |undefined
}>({ messages: [], setMessages: () => [], socketInstance:undefined});

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [socketInstance, setSocketInstance] = useState<Socket | undefined>(
    undefined
  );

  useEffect(() => {
    const socket = initializeSocket();
    setSocketInstance(socket);
    initialMessageToServer(socket);
    socket.on("server_message", (data) => {
      setMessages((currentMessages) => currentMessages.concat([data]));
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="chat">
      <ChatContext.Provider value={{messages,setMessages, socketInstance}}>
        <LeftContent />
        <RightContent        />
      </ChatContext.Provider>
    </div>
  );
}
