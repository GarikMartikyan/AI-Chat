import { useEffect } from "react";
import data from "../../../Data and Logic/classes/data.js";

export default function handleSubmit(Reference, Context) {
  const { inputRef, buttonRef, formRef } = Reference;
  const { chat, setChat } = Context;
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

    function onSubmitActions() {
      if (!input.value.trim().length) return false;
      input.focus();
      data.deliverMessage(input.value, setChat);
      input.value = "";
      button.disabled = true;
      input.style.height = "1.5rem";
    }

    return () => {
      form.removeEventListener("keypress", keypress);
      form.removeEventListener("submit", submit);
    };
  }, []);
}
