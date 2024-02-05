import classes from "./Text.module.scss";
import { useEffect, useRef } from "react";

export default function Text({ children }) {
  const text = useRef(null);
  useEffect(() => {
    const p = text.current;

    function textPrettier(text) {
      text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
      text = text.replace(/```/g, "<hr>");
      text = text.replace(/\*/g, "-");

      return text;
    }

    p.innerHTML = textPrettier(p.innerHTML);
  }, []);
  return (
    <div ref={text} className={classes.text}>
      {children}
    </div>
  );
}
