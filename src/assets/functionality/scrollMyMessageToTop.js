import { useEffect } from "react";

export default function scrollMyMessageToTop(ChatData) {
  useEffect(() => {
    let myLastMessageId = ChatData.findLastIndex(
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
  }, [ChatData]);
}
