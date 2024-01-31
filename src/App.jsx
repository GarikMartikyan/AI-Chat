import classes from "./App.module.scss";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  console.log("app render");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [title, setTitle] = useState("Close");

  let toggle;
  let sidebar;
  let main;

  if (sidebarOpen) {
    toggle = classes.closeBtn;
    sidebar = classes.sidebar;
    main = classes.main;
  } else {
    toggle = classes.openBtn;
    sidebar = `${classes.sidebar} ${classes.close}`;
    main = `${classes.main} ${classes.full}`;
  }

  useEffect(() => {
    const operatingSystem = navigator.platform;
    if (
      operatingSystem.toLowerCase().includes("win") ||
      operatingSystem.toLowerCase().includes("linux")
    ) {
      setTitle("Toggle Sidebar - Ctrl ⇧ S");
    } else if (operatingSystem.toLowerCase().includes("mac")) {
      setTitle("Toggle Sidebar - ⌘ ⇧ S");
    } else {
      setTitle("Toggle Sidebar");
    }

    document.addEventListener("keydown", handleKeyPress);

    function handleKeyPress(event) {
      const isPressedCmdOrCtrl = event.ctrlKey || event.metaKey;
      const isPressedShift = event.shiftKey;
      const isPressedS = event.key.toUpperCase() === "S";
      const SidebarToggleShortcut =
        isPressedCmdOrCtrl && isPressedShift && isPressedS;

      if (SidebarToggleShortcut) {
        event.preventDefault();
        setSidebarOpen((prv) => !prv);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <nav className={sidebar}>
        <Sidebar />
      </nav>
      <main className={main}>
        <div
          className={toggle}
          onClick={() => setSidebarOpen((prev) => !prev)}
          title={title}
        >
          <div className={classes.pt1}></div>
          <div className={classes.pt2}></div>
        </div>
      </main>
    </>
  );
}

export default App;
