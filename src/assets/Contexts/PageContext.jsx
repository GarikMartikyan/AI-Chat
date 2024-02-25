import React, { useContext, useState } from "react";
import { chatsList } from "../../../Data and Logic/classes/dataControl.js";

export const PageContext = React.createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function PageProvider({ children }) {
  const [state, setStateUpdate] = useState(true);
  const [chatNow, setChatNow] = useState(chatsList[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const values = {
    chatNow,
    setChatNow,
    state,
    setStateUpdate,
    sidebarOpen,
    setSidebarOpen,
  };

  return <PageContext.Provider value={values}>{children}</PageContext.Provider>;
}
