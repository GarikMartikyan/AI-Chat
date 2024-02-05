import classes from "./MessageInput.module.scss";
import { SendHorizontal } from "lucide-react";
import { useRef } from "react";
import textareaResize from "../../../assets/functionality/textareaResize.js";
import disableButtonByText from "../../../assets/functionality/disableButtonByText.js";
import { useChatData } from "../../../assets/Contexts/MessageContext.jsx";
import handleSubmit from "../../../assets/functionality/handleSubmit.js";

export default function MessageInput() {
  const chatData = useChatData();

  const textareaRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const refs = {
    inputRef: textareaRef,
    buttonRef: buttonRef,
    formRef: formRef,
  };

  textareaResize(textareaRef);
  disableButtonByText(buttonRef, textareaRef);
  handleSubmit(refs, chatData);

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
