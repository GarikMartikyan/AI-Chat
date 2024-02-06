import classes from "./ChatTitle.module.scss";
import { MessageSquareText } from "lucide-react";
import { usePageContext } from "../../../assets/Contexts/PageContext.jsx";

export default function ChatTitle({ children, id }) {
  const { setChatNow, data } = usePageContext();
  return (
    <div
      onClick={() =>
        setChatNow(() => {
          return { ...data.find((item) => item.id === id) };
        })
      }
      className={classes.chat}
    >
      <MessageSquareText />
      <span>{children}</span>
    </div>
  );
}
