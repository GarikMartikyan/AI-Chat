import classes from "./Sidebar.module.scss";
import { MessageSquarePlus } from "lucide-react";
import ChatTitle from "./ChatTitle/ChatTitle.jsx";
import { useEffect, useRef } from "react";
import { usePageContext } from "../../assets/Contexts/PageContext.jsx";
import {
  chatsList,
  dataControl,
} from "../../../Data and Logic/classes/dataControl.js";

export default function Sidebar() {
  const { data, setData, chatNow } = usePageContext();
  const addChat = useRef(null);
  useEffect(() => {
    const add = addChat.current;

    add.addEventListener("click", addChatFunc);

    function addChatFunc() {
      dataControl.createChat();
      setData(() => [...chatsList]);
    }

    return () => {
      add.removeEventListener("click", addChatFunc);
    };
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>AI Chat</h1>
        <button ref={addChat} title="New Chat">
          <MessageSquarePlus />
        </button>
      </div>
      <section className={classes.chats}>
        <h1>Chats</h1>
        <div className={classes.chatContainer}>
          {[...data].reverse().map((item) => (
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
