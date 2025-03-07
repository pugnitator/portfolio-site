import Button from "../../../shared/ui/Button";
import { ButtonProp } from "../../../shared/ui/Button";

export default function TelegramBatton(id: string) {
    const telegram = 'https://t.me/katya116688'

    const buttonProp: ButtonProp = {
        isLink: true,
        text: 'Telegram',
        link: telegram,
        className: 'keyboard__button',
        id: id,
    };

    return(
        <Button {...buttonProp} />
    )
}