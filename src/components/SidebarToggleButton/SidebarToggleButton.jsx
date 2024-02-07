import classes from "./SidebarToggleButton.module.scss";
import { useEffect, useState } from "react";
import { getTitleByOS } from "../../assets/functionality/ToggleButtonFunctionality.js";

export default function SidebarToggleButton({ toggleFunc, isSidebarOpen }) {
  const [title, setTitle] = useState("Close");

  let toggle = isSidebarOpen ? classes.closeBtn : classes.openBtn;

  useEffect(() => {
    setTitle(getTitleByOS());

    document.addEventListener("keydown", handleSidebarToggle);

    function handleSidebarToggle(event) {
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
      document.removeEventListener("keydown", handleSidebarToggle);
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
