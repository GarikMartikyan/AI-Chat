import classes from "./MainContent.module.scss";
import { SendHorizontal } from "lucide-react";
import { useRef } from "react";
import useTextareaResize from "../../assets/CustomHooks/useTextareaResize.jsx";

export default function MainContent() {
  const textareaRef = useRef();
  useTextareaResize(textareaRef);

  return (
    <div className={classes.wrapper}>
      <header>
        <h1>Chat Name</h1>
      </header>
      <div className={classes.chatWindow}></div>
      <div className={classes.message}>
        <div className={classes.container}>
          <form action="#" autoComplete="off">
            <textarea
              ref={textareaRef}
              id="message"
              name="message"
              placeholder="Write message..."
            ></textarea>
            <button id="submit" type="submit">
              <SendHorizontal />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
