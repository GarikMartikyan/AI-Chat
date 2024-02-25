import classes from "../../App.module.scss";
import { usePageContext } from "../Contexts/PageContext.jsx";

export function toggleClasses() {
  const { sidebarOpen } = usePageContext();

  let sidebar, main;
  if (sidebarOpen) {
    sidebar = classes.sidebar;
    main = classes.main;
  } else {
    sidebar = `${classes.sidebar} ${classes.close}`;
    main = `${classes.main} ${classes.full}`;
  }
  return { main, sidebar };
}
