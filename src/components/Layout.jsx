import styles from "../styles/layout.module.css"
import girl from "../images/girl.jpg"

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div><img src={props.image} alt="" /></div>
            <div>{props.children}</div>
        </div>
    )


} 