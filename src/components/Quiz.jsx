import { IoCodeSlashOutline } from "react-icons/io5"
import styles from "../styles/quiz.module.css"

export default function Quiz (props) {
return (
    <div className={styles.container}>
       
        <div className={styles.item}>
            <IoCodeSlashOutline  />
            <p>{props.text}</p>
        </div>
            <button className={styles.btn}>Start</button>
    </div>
)
}