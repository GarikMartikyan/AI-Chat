import { useEffect } from "react";
import data from "../../../Data and Logic/classes/dataControl.js";

export default function handleSubmit(Reference, Context) {
  const { inputRef, buttonRef, formRef } = Reference;
  const { setChat } = Context;
  useEffect(() => {
    let input = inputRef.current;
    let button = buttonRef.current;
    let form = formRef.current;

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

      const message = input.value;

      input.focus();
      input.value = "";
      button.disabled = true;
      input.style.height = "1.5rem";
      await data.deliverMessage(message, setChat);
    }

    return () => {
      form.removeEventListener("keypress", keypress);
      form.removeEventListener("submit", submit);
    };
  }, []);
}
