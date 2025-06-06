import { RiWifiLine } from "react-icons/ri"
import styles from "../styles/row.module.css"


export default function Row (props) {
    return (
        <div className={styles.row}>
            {props.icon}
            <div className={styles.radio}>
                <label htmlFor="">{props.text}</label>
                <input type="radio" />
            </div>
        </div>
    )
        
    
}