import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import SidebarToggleButton from "./components/SidebarToggleButton/SidebarToggleButton.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import { toggleClasses } from "./assets/functionality/AppFunctionality.js";

function App() {
  console.log("App Rendered");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { main, sidebar } = toggleClasses(sidebarOpen);

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
