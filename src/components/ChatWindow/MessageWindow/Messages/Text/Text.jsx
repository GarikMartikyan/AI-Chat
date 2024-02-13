import classes from "./Text.module.scss";
import { useEffect, useRef } from "react";
import { getSendedTime } from "../../../../../assets/functionality/generalFunctions.js";

export default function Text({ children, role, sended }) {
  const text = useRef(null);

  useEffect(() => {
    const p = text.current;
    if (children.length < 15) {
      p.style.paddingRight = "3.7rem";
    }
    if (role === "model") {
      p.innerHTML = textPrettier(p.innerHTML);
    }

    function textPrettier(text) {
      text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
      text = text.replace(/```/g, "<hr>");
      text = text.replace(/\*/g, "<span>*</span>");

      return text;
    }
  }, [children]);
  return (
    <>
      <div ref={text} className={classes.text}>
        {children}
      </div>
      <div className={classes.sendedTime}>{getSendedTime(sended)}</div>
    </>
  );
}
