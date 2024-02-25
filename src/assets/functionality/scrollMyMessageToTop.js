import { useEffect } from "react";
import { usePageContext } from "../Contexts/PageContext.jsx";

export default function scrollMyMessageToTop() {
  const { chatNow, state, sidebarOpen } = usePageContext();
  useEffect(() => {
    const mobileWidth = 770;
    const myLastMessageId = chatNow.history.findLastIndex(
      (item) => item.role === "user",
    );

    if (window.innerWidth < mobileWidth) {
      if (!sidebarOpen) {
        scrollToTop(myLastMessageId);
      }
    } else {
      scrollToTop(myLastMessageId);
    }

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
