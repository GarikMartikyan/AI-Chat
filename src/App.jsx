import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import { toggleClasses } from "./assets/functionality/AppFunctionality.js";
import SidebarToggleButton from "./components/SidebarToggleButton/SidebarToggleButton.jsx";

function App() {
  const { main, sidebar } = toggleClasses();

  return (
    <>
      <nav className={sidebar}>
        <Sidebar />
        <SidebarToggleButton />
      </nav>
      <main className={main}>
        <ChatWindow />
      </main>
    </>
  );
}

export default App;
