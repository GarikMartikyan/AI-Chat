import classes from "./MessageInput.module.scss";
import { SendHorizontal } from "lucide-react";
import { useRef } from "react";
import textareaResize from "../../../assets/functionality/textareaResize.js";
import disableButtonByText from "../../../assets/functionality/disableButtonByText.js";
import handleSubmit from "../../../assets/functionality/handleSubmit.js";
import { usePageContext } from "../../../assets/Contexts/PageContext.jsx";

export default function MessageInput() {
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const refs = {
    inputRef: textareaRef,
    buttonRef: buttonRef,
    formRef: formRef,
  };
  const { chatNow } = usePageContext();

  textareaResize(textareaRef);
  disableButtonByText(buttonRef, textareaRef);
  handleSubmit(refs, chatNow);

  // useEffect(() => {
  //   try {
  //     document.forms.message.message.focus();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [chatNow]);

  return (
    <div className={classes.container}>
      <form
        ref={formRef}
        name="message"
        action="#"
        autoComplete="off"
        method="POST"
      >
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
