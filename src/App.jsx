import classes from "./App.module.scss";
import { useEffect, useState } from "react";

function App() {
  console.log("app render");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [title, setTitle] = useState("Close");

  let toggle;
  let sidebar;

  if (sidebarOpen) {
    toggle = classes.closeBtn;
    sidebar = classes.sidebar;
  } else {
    toggle = classes.openBtn;
    sidebar = `${classes.sidebar} ${classes.close}`;
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

    document.addEventListener("keydown", function (event) {
      const isPressedCmdOrCtrl = event.ctrlKey || event.metaKey;
      const isPressedShift = event.shiftKey;
      const isPressedS = event.key.toUpperCase() === "S";
      const SidebarToggleShortcut =
        isPressedCmdOrCtrl && isPressedShift && isPressedS;

      if (SidebarToggleShortcut) {
        setSidebarOpen((prv) => !prv);
      }
    });
  }, []);

  return (
    <>
      <nav className={sidebar}>AI Chat</nav>
      <div className={classes.main}>
        <div
          className={toggle}
          onClick={() => setSidebarOpen((prev) => !prev)}
          title={title}
        >
          <div className={classes.pt1}></div>
          <div className={classes.pt2}></div>
        </div>
        main
      </div>
    </>
  );
}

export default App;
