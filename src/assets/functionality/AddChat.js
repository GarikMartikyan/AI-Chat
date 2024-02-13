import { useEffect } from "react";
import { dataControl } from "../../../Data and Logic/classes/dataControl.js";
import { usePageContext } from "../Contexts/PageContext.jsx";

export default function AddChat(AddIconRef) {
  const { chatNow, setChatNow } = usePageContext();

  useEffect(() => {
    const add = AddIconRef.current;

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
}
