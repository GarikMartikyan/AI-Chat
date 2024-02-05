import classes from "./Message.module.scss";
import { useState } from "react";
import TypingAnimation from "./TypingAnimation/TypingAnimation.jsx";
import Text from "./Text/Text.jsx";

export default function Message({ children, person }) {
  const [showAnimation, setShowAnimation] = useState(children === "");

  const container = person === "user" ? classes.user : classes.chat;

  return (
    <div className={container}>
      <div className={classes.message}>
        {!showAnimation && <Text children={children} />}
        {showAnimation && <TypingAnimation />}
      </div>
    </div>
  );
}
