import classes from "./ChatWindow.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import MessageWindow from "./MessageWindow/MessageWindow.jsx";
import { useRef } from "react"; // chat.deliverMessage("Can you help me please?");

export default function ChatWindow() {
  const messageWindowRef = useRef();

  return (
    <div className={classes.container}>
      <header>
        <h1>Chat Name</h1>
      </header>
      {/*<MessageProvider>*/}
      <div ref={messageWindowRef} className={classes.messageWindow}>
        <MessageWindow />
      </div>
      <div className={classes.message}>
        <MessageInput />
      </div>
      {/*</MessageProvider>*/}
    </div>
  );
}
