import classes from "./Message.module.scss";

export default function Message({ person }) {
  const container = person === "user" ? classes.user : classes.chat;
  const typingAnimation = (
    <div className={classes.typingAnimation}>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
    </div>
  );
  return (
    <div className={container}>
      <div className={classes.message}>
        {/*
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus
        facilis harum, hic minima quaerat quam saepe vitae. At cum deleniti
        doloribus error est ex explicabo fugit ipsa, iure libero magnam nam
        placeat quisquam rerum sapiente sequi sint sit tempora tenetur ut.
        Debitis eligendi fugiat quia sint soluta! Error, rerum.*/}
        {typingAnimation}
      </div>
    </div>
  );
}
