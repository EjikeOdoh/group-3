import { RiFlaskLine } from "react-icons/ri"
import Quiz from "../components/Quiz"
import styles from "../styles/quizzes.module.css"
import { GrDocument } from "react-icons/gr"
import { IoCodeSlash } from "react-icons/io5"
import document from "../images/document.png"
import code from "../images/code.png"
import cells from "../images/code.png"
import figma from "../images/figma.png"



export default function Quizzes () {
    return (
        <div>
            <div></div>
            <div className={styles.row}>
                
        <Quiz icon={document} text="Coding and design" />
        <Quiz icon={code} text="Algebra quiz" />
        <Quiz icon={cells} text="Science quiz" />
        <Quiz icon={figma} text="Biology quiz"/>
        <Quiz icon={figma} text="Figma quiz"/>
            </div>
        </div>
    )
}