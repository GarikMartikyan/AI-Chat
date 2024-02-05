import React, { useContext, useState } from "react";
import { dataControl } from "../../../Data and Logic/classes/dataControl.js";

export const PageContext = React.createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function MessageProvider({ children }) {
  const [data, setData] = useState(dataControl);
  return (
    <PageContext.Provider value={{ data, setData }}>
      {children}
    </PageContext.Provider>
  );
}
