import classes from "./App.module.scss";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import SidebarToggle from "./components/SidebarToggle/SidebarToggle.jsx";

function App() {
  console.log("app render");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  let toggle;
  let sidebar;
  let main;

  if (sidebarOpen) {
    sidebar = classes.sidebar;
    main = classes.main;
  } else {
    sidebar = `${classes.sidebar} ${classes.close}`;
    main = `${classes.main} ${classes.full}`;
  }

  return (
    <>
      <nav className={sidebar}>
        <Sidebar />
      </nav>
      <main className={main}>
        <SidebarToggle
          sidebarOpen={sidebarOpen}
          toggleFunc={() => setSidebarOpen((prv) => !prv)}
        />
      </main>
    </>
  );
}

export default App;
