import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../components/chat/Chat";
import FormUser from "../components/index/FormUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormUser />} />
        <Route path="/chat-currency-conversor" element={<Chat />} />
        <Route path="*" element={"Not Found"} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
