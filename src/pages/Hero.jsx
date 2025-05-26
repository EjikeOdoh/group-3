import Button from "../components/Button"
import styles from "../styles/hero.module.css"

import cover from "../images/cover.png"
import icon from "../images/icons.svg"

export default function Hero() {
    return (
        <div>
            {/* <div>nav</div> */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        <div className={styles.badges}>
                            <span className={styles.badge}>Progress</span>
                            <span className={styles.badge}>Tracking</span>
                        </div>
                        <h1>Earn and Learn
                            Anywhere, Anytime</h1>
                        <p>From class to coins - Learn, Play, and Progress your way</p>
                       
                       <div className={styles.btn}>
                         <Button text="Start a 7-day Free Trial" />
                        </div>
                    </div>
                    <div className={styles.buttom}>
                        <div><img src={icon} alt="" /></div>
                        <p>A vast library of educational resources and materials</p>
                    </div>
                </div>
                <div><img src={cover} alt="" /></div>
            </div>
        </div>
    )
}