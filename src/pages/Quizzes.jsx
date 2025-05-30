import { RiFlaskLine } from "react-icons/ri"
import Quiz from "../components/Quiz"
import styles from "../styles/quizzes.module.css"

export default function Quizzes () {
    return (
        <div>
            <div></div>
            <div className={styles.row}>
                
                <Quiz text="Coding and design" />
                <Quiz text="Algebra quiz" />
                <Quiz text="Science quiz" />
                <Quiz text="Figma quiz"/>
            </div>
        </div>
    )
}