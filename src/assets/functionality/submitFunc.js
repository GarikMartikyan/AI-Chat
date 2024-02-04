import { useEffect } from "react";
import onSubmit from "./handleSubmit.js";

export default function submitFunc(FormRef, InputRef, ButtonRef) {
  useEffect(() => {
    const form = FormRef.current;

    const handleSubmit = onSubmit(InputRef, ButtonRef);
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);
}
