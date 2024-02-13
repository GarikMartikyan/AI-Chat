import { useEffect } from "react";

export default function (References) {
  useEffect(() => {
    const textField = References.inputRef.current;
    const button = References.buttonRef.current;

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
