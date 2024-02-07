import classes from "./ChatTitle.module.scss";
import { MessageSquareText } from "lucide-react";
import { usePageContext } from "../../../assets/Contexts/PageContext.jsx";

export default function ChatTitle({ children, id, isActive }) {
  const { chatNow, setChatNow, data } = usePageContext();
  const titleClass = isActive
    ? `${classes.chat} ${classes.active}`
    : `${classes.chat}`;

  function handleClick() {
    if (chatNow.id === id) return;
    setChatNow(() => {
      return { ...data.find((item) => item.id === id) };
    });
  }

  return (
    <div onClick={handleClick} className={titleClass}>
      <MessageSquareText />
      <span>{children}</span>
    </div>
  );
}
