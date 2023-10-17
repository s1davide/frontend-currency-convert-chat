import "./ChatFooter.scss";
import { Button, IInputProps, Input } from "react-chat-elements";
import { useContext, useState } from "react";
import SendIcon from "../../../../../../assets/icons/send.svg?react";
import { ChatContext, Message } from "../../../../Chat";

export default function InputSendBase() {
  const [input, setInput] = useState("");

  const { socketInstance, setMessages } = useContext(ChatContext);

  const inputProps = {
    className: "chat-footer__input",
    placeholder: "Escriba aqui...",
    multiline: true,
  } as IInputProps;

  const sendMessage = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<Element>
  ) => {
    e.preventDefault();
    const message: Message={
      date: new Date(),
      text: input,
      sender: "user",
    }
    if (input !== "") {      
      socketInstance?.emit("client_message", message);
    }

    setMessages((currentMessages)=>currentMessages.concat([message]))

    const textAreaElement = document.querySelector<HTMLTextAreaElement>(
      ".chat-footer__input > textarea"
    );
    if (textAreaElement !== null) textAreaElement.value = "";
  };

  return (
    <form onSubmit={sendMessage} className="chat-footer">
      <Input
        {...inputProps}
        value={input}
        onKeyPress={(e) => {
          e.key === "Enter" && !e.shiftKey && sendMessage(e);
        }}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setInput(e.target.value)
        }
      />
      <Button
        type="submit"
        backgroundColor="transparent"
        icon={{ component: <SendIcon height={24} /> }}
      />
    </form>
  );
}
