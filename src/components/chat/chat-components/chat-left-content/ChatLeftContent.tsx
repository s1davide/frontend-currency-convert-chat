import "./ChatLeftContent.scss";
import { ChatItem, IChatItemProps } from "react-chat-elements";
import IconCopUSD from "../../../../assets/icons/image_money.jpg";
import ChatLeftHeader from "./left-components/chat-left-header/ChatLeftHeader";

export default function LeftContent() { 

  const chatItemProps = {
    date: new Date(),
    title: "Conversión entre pesos y dólares",
    avatar: IconCopUSD,
  } as IChatItemProps;

  return (
    <div className="chat-left-content">
      <ChatLeftHeader/>
      <ChatItem {...chatItemProps} />
    </div>
  );
}
