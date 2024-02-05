import classes from "./Message.module.scss";
import TypingAnimation from "./TypingAnimation/TypingAnimation.jsx";
import Text from "./Text/Text.jsx";

export default function Message({ children, person, showAnimation }) {
  // const [showAnimation, setShowAnimation] = useState(person === "user");
  // const showAnimation = person === "user";
  const container = person === "user" ? classes.user : classes.chat;

  return (
    <>
      <div className={container}>
        <div className={classes.message}>
          <Text children={children} />
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
