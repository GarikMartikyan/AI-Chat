import classes from "./App.module.scss";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  let toggle;
  let sidebar;

  if (sidebarOpen) {
    toggle = classes.closeBtn;
    sidebar = classes.sidebar;
  } else {
    toggle = classes.openBtn;
    sidebar = classes.sidebar + " " + classes.close;
  }

  return (
    <>
      <nav className={sidebar}>AI Chat</nav>
      <div className={classes.main}>
        <div
          className={toggle}
          onClick={() => setSidebarOpen((prv) => !prv)}
          title=""
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
