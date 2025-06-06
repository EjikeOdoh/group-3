import { RxCaretRight } from "react-icons/rx"
import styles from "../styles/mode.module.css"
import { LiaToggleOnSolid } from "react-icons/lia"

export default function Mode (){
    return(
        <div className={styles.mode}>
            <p>Dashboard</p>
            <RxCaretRight />
            <p>Smart Learning Mode</p>

            <div className={styles.connection}>
                <h3>
                    Poor connection? Switch to smart learning mode!
                </h3>
                <p>Auto-detects low bandwidth and loads lighter content</p>
                <p>Suggest content formats: Video/Audio/PDF</p>
                <p>Toggle available to manually switch modes</p>
            </div>

            <div className={styles.switch}>
                <p>Manual Switch</p>
                <LiaToggleOnSolid />
            </div>

        </div>
    )
}