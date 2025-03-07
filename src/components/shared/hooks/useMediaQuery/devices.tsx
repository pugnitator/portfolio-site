export enum deviceType {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
  MOBILE_MINI = "mobile-mini",
}

export interface device {
  media: MediaQueryList;
  type: deviceType;
}

const devices = {
  desktop: {
    media: window.matchMedia("(max-width: 1440px)"),
    type: deviceType.DESKTOP,
  },
  tablet: {
    media: window.matchMedia("(max-width: 1024px)"),
    type: deviceType.TABLET,
  },
  mobile: {
    media: window.matchMedia("(max-width: 767px)"),
    type: deviceType.MOBILE,
  },
  mobileMini: {
    media: window.matchMedia("(max-width: 585px)"),
    type: deviceType.MOBILE_MINI,
  },
};

export default devices;