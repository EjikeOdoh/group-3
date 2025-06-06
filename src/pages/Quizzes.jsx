import { RiFlaskLine } from "react-icons/ri"
import Quiz from "../components/Quiz"
import styles from "../styles/quizzes.module.css"
import document from "../images/document.png"
import code from "../images/code.png"
import cells from "../images/cells.png"
import flask from "../images/flask.png"
import figma from "../images/figma.png"
import flask from "../images/flask.png"



export default function Quizzes () {
    return (
        <div>
            <div></div>
            <div className={styles.row}>
                
        <Quiz icon={code}  text="Coding and design" />
        <Quiz icon= {document} text="Algebra quiz" />
        <Quiz icon={cells} text="Science quiz" />
        <Quiz icon={flask} text="Biology quiz"/>
        <Quiz icon={figma} text="Figma quiz"/>
            </div>
        </div>
    )
}