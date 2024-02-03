import { useEffect } from "react";

export default function (InputRef, SubmitFunc) {
  useEffect(() => {
    // const form = FormRef.current;
    const input = InputRef.current;

    // const button = ButtonRef.current;

    function submitFormOnEnter(e) {
      if (!input.value.trim().length) return false;
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        SubmitFunc();
      }
    }

    input.addEventListener("keypress", submitFormOnEnter);

    return () => {
      input.removeEventListener("keypress", submitFormOnEnter);
    };
  }, []);
}
