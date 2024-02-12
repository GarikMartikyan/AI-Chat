import classes from "./Sidebar.module.scss";
import { MessageSquarePlus } from "lucide-react";
import ChatTitle from "./ChatTitle/ChatTitle.jsx";
import { useEffect, useRef } from "react";
import { usePageContext } from "../../assets/Contexts/PageContext.jsx";
import { dataControl } from "../../../Data and Logic/classes/dataControl.js";
import { getNewChatTitle } from "../../assets/functionality/ToggleButtonFunctionality.js";

export default function Sidebar() {
  const { data, chatNow, setChatNow } = usePageContext();
  const addChat = useRef(null);

  useEffect(() => {
    const add = addChat.current;

    add.addEventListener("click", addChatFunc);

    function addChatFunc() {
      const newChat = dataControl.createChat();
      setChatNow(() => newChat);
    }

    document.addEventListener("keydown", newChatSortcut);

    function newChatSortcut(event) {
      const isPressedCmdOrCtrl = event.ctrlKey || event.metaKey;
      const isPressedShift = event.shiftKey;
      const isPressedS = event.key.toUpperCase() === "E";
      const SidebarToggleShortcut =
        isPressedCmdOrCtrl && isPressedShift && isPressedS;

      if (SidebarToggleShortcut) {
        addChatFunc();
      }
    }

    return () => {
      add.removeEventListener("click", addChatFunc);
      document.removeEventListener("keydown", newChatSortcut);
    };
  }, [chatNow]);
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
