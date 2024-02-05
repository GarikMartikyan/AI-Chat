import classes from "./ChatWindow.module.scss";
import MessageInput from "./MessageInput/MessageInput.jsx";
import MessageWindow from "./MessageWindow/MessageWindow.jsx";
import MessageProvider from "../../assets/Contexts/MessageContext.jsx";
import {useRef} from "react"; // chat.deliverMessage("Can you help me please?");

// chat.deliverMessage("Can you help me please?");
// console.log(chat);
export default function ChatWindow() {
  const messageWindowRef = useRef();
  // useEffect(() => {
  //   const elem = messageWindowRef.current;
  //   if (elem) {
  //     elem.scrollTop = elem.scrollHeight;
  //     elem.addEventListener("scroll", () => {
  //       console.log(elem.getBoundingClientRect());
  //     });
  //   }
  // }, []);

  return (
    <div className={classes.container}>
      <header>
        <h1>Chat Name</h1>
      </header>
      <MessageProvider>
        <div ref={messageWindowRef} className={classes.messageWindow}>
          <MessageWindow />
        </div>
        <div className={classes.message}>
          <MessageInput />
        </div>
      </MessageProvider>
    </div>
  );
}
