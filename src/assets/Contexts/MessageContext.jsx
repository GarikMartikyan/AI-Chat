import React, { useContext, useState } from "react";
import { usePageContext } from "./PageContext.jsx";

export const MessageContext = React.createContext();

export function useChatData() {
  return useContext(MessageContext);
}

export default function MessageProvider({ children }) {
  const { chatNow, dataControl } = usePageContext();
  console.log("CHat now in MessageContext: ", chatNow);
  let [chat, setChat] = useState(() => {
    return dataControl.getData().find((item) => item.id === chatNow.id).history;
  });
  return (
    <MessageContext.Provider value={{ chat, setChat }}>
      {children}
    </MessageContext.Provider>
  );
}
