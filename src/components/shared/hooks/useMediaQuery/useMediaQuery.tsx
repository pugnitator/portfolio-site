import { useState, useEffect } from "react";
import devices, { device } from "./devices";
import { getCurrentDevice } from "./getCurrentDevice";

export default function useMediaQuery() {
  const [currentDevice, setCurrentDevice] = useState<device | null>(null);

  useEffect(() => {
    setCurrentDevice(getCurrentDevice());

    Object.values(devices).forEach(({ media }) =>
      media.addEventListener("change", handleMediaQueryChange)
    );

    return () => {
      Object.values(devices).forEach(({ media }) =>
        media.removeEventListener("change", handleMediaQueryChange)
      );
    };
  }, []);

  function handleMediaQueryChange() {
    const newDevice = getCurrentDevice();
    console.log("Я работаю", newDevice);
    if (currentDevice?.type !== newDevice.type) {
      setCurrentDevice(newDevice);
    }
  }
  return currentDevice;
}
