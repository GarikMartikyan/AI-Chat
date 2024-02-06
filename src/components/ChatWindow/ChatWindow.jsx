import classes from "./ChatWindow.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import MessageWindow from "./MessageWindow/MessageWindow.jsx";
import MessageProvider from "../../assets/Contexts/MessageContext.jsx"; // chat.deliverMessage("Can you help me please?");

export default function ChatWindow() {
  return (
    <div className={classes.container}>
      <header>
        <h1>Chat Name</h1>
      </header>
      <MessageProvider>
        <div className={classes.messageWindow}>
          <MessageWindow />
        </div>
        <div className={classes.message}>
          <MessageInput />
        </div>
      </MessageProvider>
    </div>
  );
}
