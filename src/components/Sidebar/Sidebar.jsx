import classes from "./Sidebar.module.scss";
import { MessageSquarePlus } from "lucide-react";
import {
  chatsList,
  dataControl,
} from "../../../Data and Logic/classes/dataControl.js";
import ChatTitle from "./ChatTitle/ChatTitle.jsx";
import { useEffect, useRef, useState } from "react"; // console.log(data);

console.log(chatsList);

export default function Sidebar() {
  console.log("Sidebar render");
  const [chats, setChats] = useState(chatsList);
  const addChat = useRef(null);
  useEffect(() => {
    const add = addChat.current;

    add.addEventListener("click", addChatFunc);

    function addChatFunc() {
      console.log(chatsList);
      dataControl.createChat();
      setChats(() => [...chatsList]);
    }

    return () => {
      add.removeEventListener("click", addChatFunc);
    };
  }, [chats]);
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
          {chats.map((item) => (
            <ChatTitle key={item.id} children={item.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
