import "./ChatRightContent.scss"
import ChatFooter from "./right-components/chat-footer/ChatFooter";
import MessagesBox from "./right-components/messages-box/MessagesBox";


export default function RightContent() {
  
  return (
    <div className="chat-right-content">
      <MessagesBox   />
      <ChatFooter />
    </div>
  );
}
