import classes from "./SidebarToggleButton.module.scss";
import { useEffect } from "react";
import { getToogleBtnTitle } from "../../assets/functionality/ToggleButtonFunctionality.js";
import { usePageContext } from "../../assets/Contexts/PageContext.jsx";

export default function SidebarToggleButton({ toggleFunc, isSidebarOpen }) {
  const { sidebarOpen, setSidebarOpen } = usePageContext();

  let toggle = sidebarOpen ? classes.closeBtn : classes.openBtn;

  useEffect(() => {
    document.addEventListener("keydown", handleSidebarToggle);

    function handleSidebarToggle(event) {
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
      document.removeEventListener("keydown", handleSidebarToggle);
    };
  }, []);

  return (
    <div
      className={toggle}
      onClick={() => setSidebarOpen((prv) => !prv)}
      title={getToogleBtnTitle()}
    >
      <div className={classes.pt1}></div>
      <div className={classes.pt2}></div>
    </div>
  );
}
