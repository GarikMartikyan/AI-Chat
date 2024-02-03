import classes from "./Message.module.scss";
import { useState } from "react";

export default function Message({ person }) {
  const [showAnimation, setShowAnimation] = useState(true);

  setTimeout(() => {
    setShowAnimation(false);
  }, 5000);
  const container = person === "user" ? classes.user : classes.chat;
  const typingAnimation = (
    <div className={classes.typingAnimation}>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
    </div>
  );
  const text = (
    <div className={classes.text}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam
      at autem consequuntur cumque doloremque dolorum eius, enim eum ex incidunt
      minima modi nihil officiis perferendis provident quas, quod rem
      repellendus reprehenderit sequi totam ut! Fugiat illum magnam maxime omnis
    </div>
  );
  return (
    <div className={container}>
      <div className={classes.message}>
        {!showAnimation && text}
        {showAnimation && typingAnimation}
      </div>
    </div>
  );
}
