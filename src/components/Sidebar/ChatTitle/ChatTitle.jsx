import classes from "./ChatTitle.module.scss";
import { usePageContext } from "../../../assets/Contexts/PageContext.jsx";
import { useRef, useState } from "react";
import { Check, SquarePen } from "lucide-react";
import changeChatName from "../../../assets/functionality/ChatTitleFunctionality.js";

export default function ChatTitle({ children, id, isActive }) {
  const { chatNow, setChatNow, setStateUpdate } = usePageContext();

  const [editable, setEditable] = useState(false);

  const refs = {
    input: useRef(null),
    nameContainer: useRef(null),
    iconContainer: useRef(null),
    title: useRef(null),
  };

  const states = { chatNow, setChatNow, editable, setEditable, setStateUpdate };

  changeChatName(states, refs, children, id);

  const titleClass = isActive
    ? `${classes.chat} ${classes.active}`
    : `${classes.chat}`;

  return (
    <div ref={refs.title} id="title" className={titleClass}>
      <div ref={refs.nameContainer} className={classes.nameContainer}>
        {!editable && <span>{children}</span>}
        {editable && (
          <input
            ref={refs.input}
            className="nameInput"
            name="cahtName"
            type="text"
            maxLength={23}
            autoComplete="off"
          />
        )}
      </div>
      <div ref={refs.iconContainer} className={classes.iconContainer}>
        {editable && <Check />}
        {!editable && <SquarePen />}
      </div>
    </div>
  );
}
