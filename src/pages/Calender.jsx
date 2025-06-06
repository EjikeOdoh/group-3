
import Reminder from "../components/Reminder"
import styles from "../styles/calender.module.css"

export default function Calender () {
    return (
        <div>
            <div>
                <Reminder 
                text = "Complete Course On Science"
                />
                <Reminder
                text = "Take Linkedln Optimization Quiz" />
                <Reminder 
               text = "Complete Payment on English Course"/>
                <Reminder 
                text = "Add new courses on Business Development"/>
            </div>
            <div className={styles.calender}>
                
            </div>
        </div>
    )
}