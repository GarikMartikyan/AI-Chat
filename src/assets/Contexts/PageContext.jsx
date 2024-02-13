import React, { useContext, useState } from "react";
import { chatsList } from "../../../Data and Logic/classes/dataControl.js";

export const PageContext = React.createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function PageProvider({ children }) {
  const [state, setStateUpdate] = useState(true);
  const [chatNow, setChatNow] = useState(chatsList[0]);
  console.log("Page Content Rendered");
  return (
    <PageContext.Provider
      value={{ chatNow, setChatNow, state, setStateUpdate }}
    >
      {children}
    </PageContext.Provider>
  );
}
