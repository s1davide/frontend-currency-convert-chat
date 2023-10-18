import "./ChatRightHeader.scss";
import { Avatar } from "react-chat-elements";
import IconCopUSD from "../../../../../../assets/icons/image_money.jpg";

export default function RightHeader() {
  return (
    <div className="chat-right-header">
      <Avatar type="rounded" size={"xlarge"} src={IconCopUSD} />
      <div className="chat-right-header__container-info">      
        <label >Conversor entre pesos y dólares</label>
        <p>Conectado</p>
      </div>
    </div>
  );
}
