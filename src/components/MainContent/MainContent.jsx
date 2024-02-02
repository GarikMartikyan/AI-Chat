import classes from "./MainContent.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import ChatWindow from "./ChatWindow/ChatWindow.jsx";

export default function MainContent() {
  return (
    <div className={classes.container}>
      <header>
        <h1>Chat Name</h1>
      </header>
      <div className={classes.chatWindow}>
        <ChatWindow />
      </div>
      <div className={classes.message}>
        <MessageInput />
      </div>
    </div>
  );
}
