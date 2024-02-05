import classes from "./MainContent.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import ChatWindow from "./ChatWindow/ChatWindow.jsx";
import MessageProvider from "../../assets/Contexts/messageContext.jsx";
import Hopar from "../../../test/test.jsx";

// chat.deliverMessage("Can you help me please?");
// console.log(chat);
export default function MainContent() {
  return (
    <div className={classes.container}>
      <header>
        <h1>Chat Name</h1>
        <Hopar />
      </header>
      <MessageProvider>
        <div className={classes.chatWindow}>
          <ChatWindow />
        </div>
        <div className={classes.message}>
          <MessageInput />
        </div>
      </MessageProvider>
    </div>
  );
}
