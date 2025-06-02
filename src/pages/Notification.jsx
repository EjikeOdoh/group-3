import { IoMdFunnel } from "react-icons/io"
import styles from "../styles/notification.module.css"
import Button from "../components/Button"
import { MdKeyboardArrowDown } from "react-icons/md"
import { GoPerson } from "react-icons/go"
import { IoChatbox, IoChatboxOutline } from "react-icons/io5"
import { RxCaretDown } from "react-icons/rx"


export default function Notification () {

return(
    <div>
        <h4>
            All Notifications
        </h4>
            <IoMdFunnel />
            <Button text="Today" icon={<RxCaretDown />} />

            <div>
                <GoPerson />
                <p>
                    Congratulations! your profile is 100% complete
                </p>
                <p>
                    Welcome to the most adaptive online learning platform
                </p>
                <p>
                    08/6/2025
                </p>
            </div>
            <div>
                <IoChatboxOutline />
                <p>
                    Lesson at 2:PM              
                      </p>
                <p>
                </p>
                Reminder to download lessons
                <p>
                    08/6/2025
                </p>
            </div>
    </div>




)
}