import { useEffect } from "react";

export default function (ButtonRef, TextFieldRef) {
  useEffect(() => {
    const textField = TextFieldRef.current;
    const button = ButtonRef.current;

    if (!textField.value.trim().length) {
      button.disabled = true;
    }

    function toggleButton(e) {
      button.disabled = !e.currentTarget.value.trim();
    }

    textField.addEventListener("input", toggleButton);

    return () => {
      textField.removeEventListener("input", toggleButton);
    };
  }, []);
}
