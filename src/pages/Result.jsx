import styles from "../styles/result.module.css"
import finelady from "../images/finelady.png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import WhiteButton from "../component/WhiteButton"
import Button from "../component/Button"
import { useNavigate } from "react-router"

export function Point(props) {
    return (
        <div className={styles.point}>
            <IoIosCheckmarkCircleOutline size={24} color="#43B75D" />
            <p>{props.label}</p>
        </div>
    )
}

export default function Result() {

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const next =() => {
        navigate('/profile')
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.image}>
                    <img src={finelady} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.texts}>
                        <h1>Optimization Result</h1>
                        <p>We've tailored your learning plan!</p>
                        <div className={styles.points}>
                            <Point label="Smart mode:Audio-based content" />
                            <Point label="Offline bundles activated" />
                            <Point label="Daily 30minutes learning plan" />
                            <Point label="Reward tracking enabled" />
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.down}>
                <WhiteButton text="Back" handleClick={back} />
                <Button text="Next" handleClick={next} />
            </div>

        </div>

    )
}