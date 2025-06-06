import styles from "../styles/layout.module.css"

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div style={
                {
                    backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }
            } className={styles.coverImage}>
            </div>
            <div style={{backgroundColor:'var(--primary-light)'}}>{props.children}</div>
        </div>
    )
} 