import classes from "./Sidebar.module.scss";
import { MessageSquarePlus } from "lucide-react";
import ChatTitle from "./ChatTitle/ChatTitle.jsx";
import { useRef } from "react";
import { usePageContext } from "../../assets/Contexts/PageContext.jsx";
import { chatsList } from "../../../Data and Logic/classes/dataControl.js";
import { getNewChatTitle } from "../../assets/functionality/ToggleButtonFunctionality.js";
import AddChat from "../../assets/functionality/AddChat.js";

export default function Sidebar() {
  const { chatNow } = usePageContext();
  const addChat = useRef(null);
  AddChat(addChat);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>AI Chat</h1>
        <button ref={addChat} title={getNewChatTitle()}>
          <MessageSquarePlus />
        </button>
      </div>
      <section className={classes.chats}>
        <h1>Chats</h1>
        <div className={classes.chatContainer}>
          {[...chatsList].reverse().map((item) => (
            <ChatTitle
              id={item.id}
              key={item.id}
              children={item.name}
              isActive={item.id === chatNow.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
