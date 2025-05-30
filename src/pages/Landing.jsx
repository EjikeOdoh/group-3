import Button from "../components/Button"
import styles from "../styles/landing.module.css"
import wifioff from "../images/wifioff.png"
import logo from "../images/logo.svg"
import screen from "../images/screen.png"

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className={styles.menu}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Courses</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>

                    <div className={styles.btns}>
                        <button className={styles.signInBtn}>Sign-In</button>
                        <button>Sign-Up</button>
                    </div>
                </nav>
                <div className={styles.hero}>
                    <div className={styles.left}>
                        <h1>Learn Smarter, Anywhere, Anytime</h1>
                        <button>Start Learning</button>
                    </div>
                    <div className={styles.right}>
                        <img src={screen} alt='video icon' />
                    </div>
                </div>
            </div>

            </div> 
    )


}