import React, { useContext, useLayoutEffect, useState } from "react";
import { usePageContext } from "./PageContext.jsx";

export const MessageContext = React.createContext();

export function useChatData() {
  return useContext(MessageContext);
}

export default function MessageProvider({ children }) {
  const { chatNow } = usePageContext();
  let [chat, setChat] = useState(chatNow.history);

  useLayoutEffect(() => {
    setChat(() => chatNow.history);
  }, [chatNow]);

  return (
    <MessageContext.Provider value={{ chat, setChat }}>
      {children}
    </MessageContext.Provider>
  );
}
