import "./ChatLeftContent.scss";
import { ChatItem, IChatItemProps } from "react-chat-elements";
import Icon from "../../../../assets/icons/image_money.jpg"

export default function LeftContent() {
  const chatItemProps = { date: new Date(),
     
  } as IChatItemProps;

  return (
    <div className="chat-left-content">
      <ChatItem {...chatItemProps} title="Conversión entre pesos y dólares" avatar={Icon} />
    </div>
  );
}
