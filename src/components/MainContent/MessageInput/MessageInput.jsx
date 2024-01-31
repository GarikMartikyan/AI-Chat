import classes from "./MessageInput.module.scss";
import { ArrowUp } from "lucide-react";

export default function MessageInput() {
  return (
    <div className={classes.container}>
      <form action="#" autoComplete="off">
        <input id="message" name="message" type="text" />
        <button id="submit" type="submit">
          <ArrowUp />
        </button>
      </form>
    </div>
  );
}
