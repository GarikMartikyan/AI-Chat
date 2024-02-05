import classes from "./Message.module.scss";
import { useState } from "react";

export default function Message({ children, person }) {
  const [showAnimation, setShowAnimation] = useState(children === false);

  const container = person === "user" ? classes.user : classes.chat;
  const typingAnimation = (
    <div className={classes.typingAnimation}>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
    </div>
  );
  const text = <div className={classes.text}>{children}</div>;
  return (
    <div className={container}>
      <div className={classes.message}>
        {!showAnimation && text}
        {showAnimation && typingAnimation}
      </div>
    </div>
  );
}
