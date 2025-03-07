import Button from "../../../shared/ui/Button";
import { ButtonProp } from "../../../shared/ui/Button";
import copyText from "../../../shared/copyText";


export default function EmailBatton(id: string) {
    const email = 'tsverava96@mail.ru'
    const onClick = () => {
        copyText(email);
        // тут вызываем всплывающее окно об успешном копировании (или строка в специальном поле)
    }

    const buttonProp: ButtonProp = {
        isLink: false,
        text: 'E-mail',
        onClick: onClick,
        className: 'keyboard__button',
        id: id,
    };

    return(
        <Button {...buttonProp} />
    )
}