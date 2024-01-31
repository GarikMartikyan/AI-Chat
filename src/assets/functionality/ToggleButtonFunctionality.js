import { getOSName } from "./generalFunctions.js";

export function getTitleByOS() {
  const operatingSystem = getOSName();

  if (operatingSystem === "windows" || operatingSystem === "linux") {
    return "Toggle Sidebar - Ctrl ⇧ S";
  } else if (operatingSystem === "mac") {
    return "Toggle Sidebar - ⌘ ⇧ S";
  } else {
    return "Toggle Sidebar";
  }
}
