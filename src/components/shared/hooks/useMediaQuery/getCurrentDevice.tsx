import devices from "./devices";

export function getCurrentDevice() {
  if (devices.mobileMini.media.matches) {
    return devices.mobileMini;
  }
  if (devices.mobile.media.matches) {
    return devices.mobile;
  }
  if (devices.tablet.media.matches) {
    return devices.tablet;
  }
  if (devices.desktop.media.matches) {
    return devices.desktop;
  } else return devices.desktop;
}
