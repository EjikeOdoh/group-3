import styles from "../styles/button.module.css"
export default function Button(props) {
    return (
        <button className={styles.btn}>{props.text}</button>
    )
}