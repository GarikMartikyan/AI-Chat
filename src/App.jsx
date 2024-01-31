import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import SidebarToggleButton from "./components/SidebarToggleButton/SidebarToggleButton.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import { toggleClasses } from "./assets/functionality/AppFunctionality.js";

function App() {
  console.log("app render");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { main, sidebar } = toggleClasses(sidebarOpen);

  return (
    <>
      <nav className={sidebar}>
        <Sidebar />
      </nav>
      <main className={main}>
        <SidebarToggleButton
          isSidebarOpen={sidebarOpen}
          toggleFunc={() => setSidebarOpen((prv) => !prv)}
        />
        <MainContent />
      </main>
    </>
  );
}

export default App;
