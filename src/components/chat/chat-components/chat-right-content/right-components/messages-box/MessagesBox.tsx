import "./MessagesBox.scss";
import classNames from "classnames";
import { MessageBox, MessageBoxType } from "react-chat-elements";
import { useContext, useEffect } from "react";
import { scrollNewMessage } from "./behaviour";
import { ChatContext, Message } from "../../../../Chat";

export default function MessagesBox() {
  const { messages } = useContext(ChatContext);

  useEffect(() => {
    scrollNewMessage();
  }, [messages]);
  
  const classesMessageBox = (sender:  Message["sender"]) =>
    classNames({ "messages-box__custom-message--green": sender==="user" });

  const formatedMessage = (text: string) =>
    (<div dangerouslySetInnerHTML={{ __html: text }}></div>) as unknown;

  const messageBoxProps = (message: Message): MessageBoxType =>
    ({
      className: classesMessageBox(message.sender),
      date: new Date(),  
      position: message.sender === "server" ? "left" : "right",
      type: "text",
      title: message.title,
      text: formatedMessage(message.text),
    } as MessageBoxType);

  return (
    <div className="messages-box">
      {messages.map((message, idx) => (
        <MessageBox key={idx} {...messageBoxProps(message)} />
      ))}
    </div>
  );
}
