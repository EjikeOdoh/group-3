import styles from '../styles/radio.module.css'

export default function Radio(props) {
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
