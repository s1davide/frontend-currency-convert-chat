import "./ChatRightContent.scss"
import ChatFooter from "./right-components/chat-footer/ChatFooter";
import MessagesBox from "./right-components/messages-box/MessagesBox";
import RightHeader from "./right-components/chat-right-header/ChatRightHeader";


export default function RightContent() {
  
  return (
    <div className="chat-right-content">
      <RightHeader/>
      <MessagesBox   />
      <ChatFooter />
    </div>
  );
}
