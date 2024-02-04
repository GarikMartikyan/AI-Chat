import classes from "./MainContent.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import ChatWindow from "./ChatWindow/ChatWindow.jsx";
import chat from "../../../Data and Logic/classes/data.js";

chat.myMessage("Can you help me please?");
console.log(chat);
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
