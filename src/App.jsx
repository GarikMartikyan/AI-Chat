import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import SidebarToggleButton from "./components/SidebarToggleButton/SidebarToggleButton.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import { toggleClasses } from "./assets/functionality/AppFunctionality.js";
import PageProvider from "./assets/Contexts/PageContext.jsx";

import MessageProvider from "./assets/Contexts/MessageContext.jsx";

function App() {
  console.log("App Rendered");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { main, sidebar } = toggleClasses(sidebarOpen);

  useEffect(() => {
    try {
      document.forms.message.message.focus();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <PageProvider>
        <MessageProvider>
          <nav className={sidebar}>
            <Sidebar />
            <SidebarToggleButton
              isSidebarOpen={sidebarOpen}
              toggleFunc={() => setSidebarOpen((prv) => !prv)}
            />
          </nav>
          <main className={main}>
            <ChatWindow />
          </main>
        </MessageProvider>
      </PageProvider>
    </>
  );
}

export default App;
