import classes from "./MessageInput.module.scss";
import { SendHorizontal } from "lucide-react";
import { useRef } from "react";
import textareaResize from "../../../assets/functionality/textareaResize.js";
import disableButtonByText from "../../../assets/functionality/disableButtonByText.js";
import submitFormOnEnter from "../../../assets/functionality/submitFormOnEnter.js";
import onSubmit from "../../../assets/functionality/handleSubmit.js";
import submitFunc from "../../../assets/functionality/submitFunc.js";

export default function MessageInput() {
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  textareaResize(textareaRef);
  disableButtonByText(buttonRef, textareaRef);
  submitFormOnEnter(textareaRef, onSubmit(textareaRef, buttonRef));
  submitFunc(formRef, textareaRef, buttonRef);
  return (
    <div className={classes.container}>
      <form ref={formRef} name="message" action="#" autoComplete="off">
        <textarea
          ref={textareaRef}
          id="message"
          name="message"
          placeholder="Write message..."
        ></textarea>
        <button ref={buttonRef} id="submitBtn" type="submit">
          <SendHorizontal />
        </button>
      </form>
    </div>
  );
}
