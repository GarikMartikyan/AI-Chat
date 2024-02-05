import classes from "./Text.module.scss";
import { useEffect, useRef } from "react";

export default function Text({ children, role }) {
  const text = useRef(null);
  useEffect(() => {
    if (role === "model") {
      const p = text.current;
      p.innerHTML = textPrettier(p.innerHTML);
    }

    function textPrettier(text) {
      text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
      text = text.replace(/```/g, "<hr>");
      text = text.replace(/\*/g, "<span>*</span>");

      return text;
    }
  }, []);
  return (
    <div ref={text} className={classes.text}>
      {children}
    </div>
  );
}
