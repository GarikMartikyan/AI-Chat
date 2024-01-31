export function getOSName() {
  const operatingSystem = navigator.platform;

  if (operatingSystem.toLowerCase().includes("win")) {
    return "windows";
  } else if (operatingSystem.toLowerCase().includes("mac")) {
    return "mac";
  } else if (operatingSystem.toLowerCase().includes("linux")) {
    return "linux";
  } else {
    return false;
  }
}
