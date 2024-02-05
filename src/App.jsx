import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import SidebarToggleButton from "./components/SidebarToggleButton/SidebarToggleButton.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import { toggleClasses } from "./assets/functionality/AppFunctionality.js";

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
    </>
  );
}

export default App;
