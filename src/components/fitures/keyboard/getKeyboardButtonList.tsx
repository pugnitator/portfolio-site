import { deviceType } from "../../shared/hooks/useMediaQuery/devices";
import BackBatton from "./buttons/BackButton";
import EmailBatton from "./buttons/EmailButton";
import TelegramBatton from "./buttons/TelegramButton";
export default function getKeyboardButtonList(device: deviceType) {

    if(device === deviceType.DESKTOP) {
        //8 колонок, 27 элементов
        return [
            BackBatton,'','','','','','','',
            '','','','','','','','',
            '','','','','','',EmailBatton,
            '','', TelegramBatton,'', ''
        ]
    }
    else if(device === deviceType.TABLET) {
        // 6 колонок, space = 4 ячейки
        return [
            BackBatton,'','','','','',
            '','','','','','',
            '','','','',EmailBatton,
            '', TelegramBatton,''
        ]
    }
    else if(device === deviceType.MOBILE) {
        // 5 колонок, space = 3 ячейки
        return [
            BackBatton,'','','','',
            '','','','','',
            '','','',EmailBatton,
            '', TelegramBatton,''
        ]
    }
    else return null;
}