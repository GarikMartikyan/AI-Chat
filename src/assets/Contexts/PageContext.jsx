import React, { useContext, useState } from "react";
import { chatsList } from "../../../Data and Logic/classes/dataControl.js";

export const PageContext = React.createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function PageProvider({ children }) {
  const [data, setData] = useState(() => chatsList);
  const [chatNow, setChatNow] = useState(data[0]);
  return (
    <PageContext.Provider value={{ data, setData, chatNow, setChatNow }}>
      {children}
    </PageContext.Provider>
  );
}
