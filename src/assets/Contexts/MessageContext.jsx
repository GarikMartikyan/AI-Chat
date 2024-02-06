import React, { useContext, useState } from "react";
import { usePageContext } from "./PageContext.jsx";

export const MessageContext = React.createContext();

export function useChatData() {
  return useContext(MessageContext);
}

export default function MessageProvider({ children }) {
  const { chatNow, setChatNow } = usePageContext();
  console.log("CHat now in MessageContext: ", chatNow);
  let [chat, setChat] = useState(chatNow.history);
  chat = chatNow.history;
  return (
    <MessageContext.Provider value={{ chat, setChat }}>
      {children}
    </MessageContext.Provider>
  );
}
