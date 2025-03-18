import devices from "../../shared/hooks/useMediaQuery/devices";
import useMediaQuery from "../../shared/hooks/useMediaQuery/useMediaQuery";
import getKeyboardButtonList from "./getKeyboardButtonList";

export default function Keyboard() {
  const currentDevice = useMediaQuery();
  console.log(currentDevice);

  let buttonList;

  if (currentDevice && currentDevice !== devices.mobileMini) {
    buttonList = getKeyboardButtonList(currentDevice?.type);
  }

  return (
    buttonList && (
      <section className="keyboard">
        <h1 className="visually-hidden">Contacts</h1>
        <div className="keyboard__messages" />
        <div className="keyboard__buttons">
          {buttonList.map((item, index) => typeof item === "function" 
          ? (item("keyboard_button_" + index)) 
          : (
              <div
                className="keyboard__button button"
                id={"keyboard_button_" + index}
                key={"keyboard_button_" + index}
              />
            )
          )}
        </div>
      </section>
    )
  );
}
