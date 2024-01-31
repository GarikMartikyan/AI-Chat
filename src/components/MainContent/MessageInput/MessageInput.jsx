import classes from "./MessageInput.module.scss";
import { SendHorizontal } from "lucide-react";

export default function MessageInput() {
  return (
    <div className={classes.container}>
      <form action="#" autoComplete="off">
        <textarea
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
