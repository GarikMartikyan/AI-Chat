import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import { toggleClasses } from "./assets/functionality/AppFunctionality.js";
import PageProvider from "./assets/Contexts/PageContext.jsx";
import SidebarToggleButton from "./components/SidebarToggleButton/SidebarToggleButton.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { main, sidebar } = toggleClasses(sidebarOpen);

  return (
    <>
      <PageProvider>
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
      </PageProvider>
    </>
  );
}

export default App;
