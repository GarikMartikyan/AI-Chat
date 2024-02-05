import React, { useContext, useState } from "react";

export const MessageContext = React.createContext();

export function useChatData() {
  return useContext(MessageContext);
}

export default function MessageProvider({ children }) {
  const [chat, setChat] = useState([]);
  return (
    <MessageContext.Provider value={{ chat, setChat }}>
      {children}
    </MessageContext.Provider>
  );
}
