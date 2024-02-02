import classes from "./MessageInput.module.scss";
import { SendHorizontal } from "lucide-react";
import { useRef } from "react";
import useTextareaResize from "../../../assets/CustomHooks/useTextareaResize.jsx";

export default function MessageInput() {
  const textareaRef = useRef();
  useTextareaResize(textareaRef);

  return (
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
  );
}
