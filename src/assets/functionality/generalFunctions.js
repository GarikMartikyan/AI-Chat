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

export function getSendedTime(sended) {
  function makeTwoNumber(number) {
    if (number.toString().length === 2) {
      return number;
    } else {
      return "0" + number;
    }
  }

  const sendedTime = new Date(sended);
  const houre = makeTwoNumber(sendedTime.getHours());
  const minute = makeTwoNumber(sendedTime.getMinutes());
  return houre + ":" + minute;
}
