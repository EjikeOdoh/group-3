import styles from '../styles/popup.module.css'

export default function Popup(props) {
  return (
    <dialog ref={props.ref}>
        <div className={styles.content}>
            {props.children}
        </div>
    </dialog>
  )
}
