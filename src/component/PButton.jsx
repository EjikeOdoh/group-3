import { PiCaretDownBold } from "react-icons/pi"
import styles from "../styles/pbutton.module.css"  

export default function PButton  (props) {

    return (
        <button onClick={props.handleClick} className={styles.container}>
            {props.text}
            <PiCaretDownBold />
        </button>
    )
}


