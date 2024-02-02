import classes from "./MainContent.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";

export default function MainContent() {
  return (
    <div className={classes.wrapper}>
      <header>
        <h1>Chat Name</h1>
      </header>
      <div className={classes.chatWindow}></div>
      <div className={classes.message}>
        <MessageInput />
      </div>
    </div>
  );
}
