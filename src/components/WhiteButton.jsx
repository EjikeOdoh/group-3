import styles from "../styles/whiteButton.module.css"
export default function WhiteButton(props) {
    return (
        <button className={styles.whitebtn}>{props.text}</button>
    )
}