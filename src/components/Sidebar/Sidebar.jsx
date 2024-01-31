import classes from "./Sidebar.module.scss";
import { MessageSquarePlus } from "lucide-react";
import ChatTitle from "./ChatTitle/ChatTitle.jsx";

export default function Sidebar({ chats }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>AI Chat</h1>
          <button title="New Chat">
            <MessageSquarePlus />
          </button>
        </div>
        <section className={classes.chats}>
          <h1>Chats</h1>
          <div className={classes.chatContainer}>
            {new Array(15).fill("").map((item, index) => (
              <ChatTitle key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
