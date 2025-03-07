import { useState } from "react";
import useMediaQuery from "../shared/hooks/useMediaQuery/useMediaQuery";
import MainWindow from "../fitures/computer-monitor/MainWindow";
import ActivationPanel from "../fitures/computer-monitor/ActivationPanel";

export default function ComputerMonitor() {
  const currentDevice = useMediaQuery();
  const [isOn, setIsOn] = useState(false);

  console.log(currentDevice);
  return (
    <section className="monitor">
      <MainWindow {...{ isOn }} />
      <ActivationPanel {...{ isOn: isOn, setIsOn: setIsOn }} />
    </section>
  );
}
