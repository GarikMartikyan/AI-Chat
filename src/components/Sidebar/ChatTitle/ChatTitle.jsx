import classes from "./ChatTitle.module.scss";
import { MessageSquareText } from "lucide-react";

export default function ChatTitle() {
  return (
    <div className={classes.chat}>
      <MessageSquareText />
      <span>First Message long message</span>
    </div>
  );
}
