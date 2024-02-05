import classes from "./TypingAnimation.module.scss";

export default function TypingAnimation() {
  return (
    <div className={classes.typingAnimation}>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
    </div>
  );
}
