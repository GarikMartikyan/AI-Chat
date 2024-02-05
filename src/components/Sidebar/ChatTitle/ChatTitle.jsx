import classes from "./ChatTitle.module.scss";
import { MessageSquareText } from "lucide-react";

export default function ChatTitle({ children }) {
  return (
    <div className={classes.chat}>
      <MessageSquareText />
      <span>{children}</span>
    </div>
  );
}
