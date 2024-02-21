import { useEffect } from "react";
import { chatsList } from "../../../Data and Logic/classes/dataControl.js";

export default function changeChatName(States, References, Name, Id) {
  const { chatNow, setChatNow, editable, setEditable, setStateUpdate } = States;
  useEffect(() => {
    const input = References.input.current;
    const icon = References.iconContainer.current;
    const name = References.nameContainer.current;
    const title = References.title.current;

    if (editable) {
      input.value = Name;
      input.focus();

      input.addEventListener("keydown", changeNameOnEnter);
      icon.addEventListener("click", changeNameOnClick);

      function changeNameOnClick() {
        setEditable(() => false);
        if (input.value === Name) return;
        if (!input.value.trim().length) return;
        chatsList[Id].renameChat(input.value);
        setStateUpdate((prv) => !prv);
      }

      function changeNameOnEnter(e) {
        if (e.key === "Enter") {
          changeNameOnClick();
        }
      }
    } else {
      name.addEventListener("click", changeChat);

      function changeChat() {
        if (chatNow.id === Id) return;
        setChatNow(() => chatsList[Id]);
      }

      icon.addEventListener("click", makeEditable);

      function makeEditable() {
        setEditable(() => true);
      }
    }
  }, [editable, chatNow]);
}
