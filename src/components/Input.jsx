import styles from "../styles/input.module.css"


export default function Input (props) {
    return (
   <div className={styles.container}>
        
        <div className={styles.input}>
            <div className={styles.alphabet}>
            {props.letters}
            </div>
            <div className={styles.radio}>
                {props.text}
               <div className={styles.option}>
                 <input type="radio" name="option" />
                </div>
            </div>
        </div>
        </div>
    )
        
    
}