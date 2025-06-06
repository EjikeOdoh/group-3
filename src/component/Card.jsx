import styles from "../styles/card.module.css"

export default function  Card (props) {
    return (
   <div className={styles.card}>
    <h3>{props.question}</h3>
    {
        props.children
    }
   </div>
    )
}