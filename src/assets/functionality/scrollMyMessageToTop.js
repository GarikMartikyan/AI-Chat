import { useEffect } from "react";
import { usePageContext } from "../Contexts/PageContext.jsx";

export default function scrollMyMessageToTop() {
  const { chatNow, state } = usePageContext();
  useEffect(() => {
    let myLastMessageId = chatNow.history.findLastIndex(
      (item) => item.role === "user",
    );

    scrollToTop(myLastMessageId);

    function scrollToTop(messageId) {
      if (-1 === messageId) return;
      const elem = document.getElementById(messageId);
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [chatNow, state]);
}
