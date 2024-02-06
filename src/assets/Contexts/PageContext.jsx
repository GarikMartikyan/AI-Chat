import React, { useContext, useState } from "react";
import {
  chatsList,
  dataControl,
} from "../../../Data and Logic/classes/dataControl.js";

export const PageContext = React.createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function PageProvider({ children }) {
  const [data, setData] = useState(() => [...chatsList]);
  const [chatNow, setChatNow] = useState({ ...data[0] });
  console.group();
  console.log("Now data is: ", data);
  console.log("Now chat is: ", chatNow);
  console.groupEnd();
  return (
    <PageContext.Provider
      value={{ data, setData, dataControl, chatNow, setChatNow }}
    >
      {children}
    </PageContext.Provider>
  );
}
