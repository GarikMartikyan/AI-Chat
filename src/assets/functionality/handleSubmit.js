import { useEffect } from "react";
import { useChatData } from "../Contexts/MessageContext.jsx";
import { usePageContext } from "../Contexts/PageContext.jsx";

export default function handleSubmit(Reference) {
  const { inputRef, buttonRef, formRef } = Reference;
  const { chat, setChat } = useChatData();
  const { chatNow } = usePageContext();

  useEffect(() => {
    let input = inputRef.current;
    let button = buttonRef.current;
    let form = formRef.current;

    try {
      document.forms.message.message.focus();
    } catch (e) {
      console.error("Message form does not found");
    }

    form.addEventListener("keypress", keypress);

    function keypress(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmitActions();
      }
    }

    form.addEventListener("submit", submit);

    function submit(e) {
      e.preventDefault();
      onSubmitActions();
    }

    async function onSubmitActions() {
      if (!input.value.trim().length) return false;
      if (chat.at(-1)?.role === "user") return false;

      const message = input.value;

      input.focus();
      input.value = "";
      button.disabled = true;
      input.style.height = "1.5rem";
      chatNow.deliverMessage(message, setChat);
    }

    return () => {
      form.removeEventListener("keypress", keypress);
      form.removeEventListener("submit", submit);
    };
  }, [chatNow]);
}
