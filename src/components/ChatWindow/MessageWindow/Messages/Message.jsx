import classes from "./Message.module.scss";
import TypingAnimation from "./TypingAnimation/TypingAnimation.jsx";
import Text from "./Text/Text.jsx";

export default function Message({ children, role, id, sended, showAnimation }) {
  const container = role === "user" ? classes.user : classes.chat;

  return (
    <>
      <div id={id} className={container}>
        <div className={classes.message}>
          <Text children={children} role={role} sended={sended} />
        </div>
      </div>
      {showAnimation && (
        <div className={classes.chat}>
          <div className={classes.message}>
            <TypingAnimation />
          </div>
        </div>
      )}
    </>
  );
}
