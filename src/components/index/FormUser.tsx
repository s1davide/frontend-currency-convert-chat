import "./FormUser.scss";
import { Button, IInputProps, Input } from "react-chat-elements";
import Card from "./index-components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FormUser() {
  const [inputValue, setInputValue] = useState("");
  const propsInput = {
    autofocus: true,
    placeholder: "Nombre de usuario.",
  } as IInputProps;

  const router = useNavigate();
  const requestUUId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== "") {
      router(`/chat-currency-conversor?name_user=${inputValue}`);
    }else{document.querySelector<HTMLInputElement>(".rce-input")?.focus()}
  };

  return (
    <div className="index">
      <Card>
        <>
          <form className="index__form" onSubmit={requestUUId}>
            <h1>Chat Currency converter App</h1>
            <label>Ingrese el nombre de usuario:</label>
            <Input
              {...propsInput}
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
            <Button text="Ingresar" />
          </form>          
        </>
      </Card>
    </div>
  );
}
