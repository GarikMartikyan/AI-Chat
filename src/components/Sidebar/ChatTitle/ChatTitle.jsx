import classes from "./ChatTitle.module.scss";
import { MessageSquareText } from "lucide-react";
import { usePageContext } from "../../../assets/Contexts/PageContext.jsx";
import { chatsList } from "../../../../Data and Logic/classes/dataControl.js";

export default function ChatTitle({ children, id, isActive }) {
  const { chatNow, setChatNow } = usePageContext();
  const titleClass = isActive
    ? `${classes.chat} ${classes.active}`
    : `${classes.chat}`;

  function handleClick() {
    if (chatNow.history.at(-1)?.role === "user") return;
    if (chatNow.id === id) return;
    setChatNow(() => chatsList.find((item) => item.id === id));
  }

  return (
    <div onClick={handleClick} className={titleClass}>
      <MessageSquareText />
      <span>{children}</span>
    </div>
  );
}
