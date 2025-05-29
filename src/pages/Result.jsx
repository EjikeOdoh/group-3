import styles from "../styles/result.module.css"
import finelady from "../images/finelady.png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import WhiteButton from "../components/WhiteButton"
import Button from "../components/Button"

export default function Result() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                    <img src={finelady} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.texts}>
                        <h1>Optimization Result</h1>
                        <p>We've tailored your learning plan!</p>
                        <ul>
                            <li>
                                <IoIosCheckmarkCircleOutline color="#43B75D"/>
                                <p>Smart mode:Audio-based content</p>
                            </li>

                            <li>
                                <IoIosCheckmarkCircleOutline  color="#43B75D"/>
                                <p>Offline bundles activated</p>
                            </li>

                            <li>
                                <IoIosCheckmarkCircleOutline color="#43B75D"/>
                                <p>Daily 30minutes learning plan</p>
                            </li>

                            <li>
                                <IoIosCheckmarkCircleOutline color="#43B75D"/>
                                <p>Reward tracking enabled</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className={styles.down}>
                <WhiteButton text="Back" />
                <Button text="Next"/>
            </div>

        </div>

    )
}