import { ButtonProp } from "../../../shared/ui/Button"
import Button from "../../../shared/ui/Button"

export default function BackBatton(id: string) {
    const buttonProp: ButtonProp = {
        isLink: false,
        text: 'Назад',
        onClick: () => window.scrollTo(0, 0),
        className: 'keyboard__button',
        id: id,
    }

    return(
        <Button {...buttonProp} />
    )
}