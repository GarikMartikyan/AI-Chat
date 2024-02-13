import classes from "./MessageInput.module.scss";
import { SendHorizontal } from "lucide-react";
import { useRef } from "react";
import textareaResize from "../../../assets/functionality/textareaResize.js";
import disableButtonByText from "../../../assets/functionality/disableButtonByText.js";
import handleSubmit from "../../../assets/functionality/handleSubmit.js";
import { usePageContext } from "../../../assets/Contexts/PageContext.jsx";

export default function MessageInput() {
  const { chatNow } = usePageContext();

  const refs = {
    inputRef: useRef(null),
    buttonRef: useRef(null),
    formRef: useRef(null),
  };

  textareaResize(refs);
  disableButtonByText(refs);
  handleSubmit(refs, chatNow);

  return (
    <div className={classes.container}>
      <form
        ref={refs.formRef}
        name="message"
        action="#"
        autoComplete="off"
        method="POST"
      >
        <textarea
          ref={refs.inputRef}
          id="message"
          name="message"
          placeholder="Write message..."
        ></textarea>
        <button ref={refs.buttonRef} id="submitBtn" type="submit">
          <SendHorizontal />
        </button>
      </form>
    </div>
  );
}
