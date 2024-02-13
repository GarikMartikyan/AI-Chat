import classes from "./ChatWindow.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import MessageWindow from "./MessageWindow/MessageWindow.jsx";
import { usePageContext } from "../../assets/Contexts/PageContext.jsx";

export default function ChatWindow() {
  const { chatNow, setChatNow } = usePageContext();

  return (
    <div className={classes.container}>
      <header>
        <h1>{chatNow.name}</h1>
      </header>
      <div className={classes.messageWindow}>
        <MessageWindow />
      </div>
      <div className={classes.message}>
        <MessageInput />
      </div>
    </div>
  );
}
