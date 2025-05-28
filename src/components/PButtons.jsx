import { PiCaretDownBold } from "react-icons/pi"
import styles from "../styles/pbuttons.module.css"  

export default function PButton  (props) {

    return (
        <button className={styles.container}>
            {props.text}
            <PiCaretDownBold />
        </button>
    )
}


