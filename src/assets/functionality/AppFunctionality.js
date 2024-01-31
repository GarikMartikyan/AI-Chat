import classes from "../../App.module.scss";

export function toggleClasses(IsSidebarOpen) {
  let sidebar, main;
  if (IsSidebarOpen) {
    sidebar = classes.sidebar;
    main = classes.main;
  } else {
    sidebar = `${classes.sidebar} ${classes.close}`;
    main = `${classes.main} ${classes.full}`;
  }
  return { main, sidebar };
}
