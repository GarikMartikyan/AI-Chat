import classes from "./SidebarToggle.module.scss";
import { useEffect, useState } from "react";

export default function SidebarToggle({ toggleFunc, sidebarOpen }) {
  const [title, setTitle] = useState("Close");

  let toggle = sidebarOpen ? classes.closeBtn : classes.openBtn;

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
        toggleFunc();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={toggle}
      onClick={() => toggleFunc((prev) => !prev)}
      title={title}
    >
      <div className={classes.pt1}></div>
      <div className={classes.pt2}></div>
    </div>
  );
}
