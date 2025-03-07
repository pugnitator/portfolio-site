import Button, { ButtonProp } from "../../shared/ui/Button";
import powerIcon from "../../../assets/power-icon.svg";

export interface ActivationPanelProp {
  isOn: boolean;
  setIsOn: (arg: boolean) => void;
}

export default function ActivationPanel({
  isOn,
  setIsOn,
}: ActivationPanelProp) {
  const buttonProp: ButtonProp = {
    isLink: false,
    onClick: () => setIsOn(!isOn),
    className: "activation-panel__power-button",
  };

  return (
    <div className="activation-panel">
      <div className="activation-panel__indicators">
        <div className="activation-panel__indicator" />
        <div className="activation-panel__indicator" />
        <div className="activation-panel__indicator" />
      </div>
      <Button {...buttonProp}>
        <img
          className="activation-panel__power-icon"
          src={powerIcon}
          alt=""
          loading="lazy"
        />
      </Button>
    </div>
  );
}
