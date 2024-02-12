import React, { useContext, useState } from "react";
import { chatsList } from "../../../Data and Logic/classes/dataControl.js";

export const PageContext = React.createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function PageProvider({ children }) {
  const [chatNow, setChatNow] = useState(chatsList[0]);
  const data = chatsList;
  console.log("Page Content Rendered");
  return (
    <PageContext.Provider value={{ data, chatNow, setChatNow }}>
      {children}
    </PageContext.Provider>
  );
}
