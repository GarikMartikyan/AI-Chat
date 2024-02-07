import { getOSName } from "./generalFunctions.js";

export function getToogleBtnTitle() {
  const operatingSystem = getOSName();

  if (operatingSystem === "windows" || operatingSystem === "linux") {
    return "Toggle Sidebar - Ctrl ⇧ S";
  } else if (operatingSystem === "mac") {
    return "Toggle Sidebar - ⌘ ⇧ S";
  } else {
    return "Toggle Sidebar";
  }
}

export function getNewChatTitle() {
  const operatingSystem = getOSName();

  if (operatingSystem === "windows" || operatingSystem === "linux") {
    return "Toggle Sidebar - Ctrl ⇧ E";
  } else if (operatingSystem === "mac") {
    return "Toggle Sidebar - ⌘ ⇧ E";
  } else {
    return "Toggle Sidebar";
  }
}
