import classes from "./ChatWindow.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import MessageWindow from "./MessageWindow/MessageWindow.jsx";
import MessageProvider from "../../assets/Contexts/MessageContext.jsx";
import { usePageContext } from "../../assets/Contexts/PageContext.jsx";

export default function ChatWindow() {
  const { chatNow } = usePageContext();
  return (
    <div className={classes.container}>
      <header>
        <h1>{chatNow.name}</h1>
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
