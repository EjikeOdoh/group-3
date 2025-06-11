import styles from "../styles/whiteButton.module.css"
export default function WhiteButton(props) {
    return (
        <button onClick={props.handleClick} className={styles.whitebtn}>{props.text} {props.icon}</button>
    )
}