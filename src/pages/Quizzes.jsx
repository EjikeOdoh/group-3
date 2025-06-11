import styles from '../styles/quizzes.module.css'
import Header from '../component/Header'

import Code from '../thumbnail/code.png'
import Algebra from '../thumbnail/algebra.png'
import Cell from '../thumbnail/cell.png'
import Science from '../thumbnail/science.png'
import Figma from '../thumbnail/figma.png'


function Quiz(props) {
    return (
        <div className={styles.quiz}>
            <div className={styles.left}>
                <div className={styles.icon}>
                    <img src={props.icon} />
                </div>
                <h4>{props.course}</h4>
            </div>
            <button>Start</button>
        </div>
    )
}

export default function Quizzes() {
    return (
        <div className={styles.container}>
            <Header
                label="Quiz"
            />
            <div className={styles.top}></div>
            <div className={styles.content}>
                <Quiz
                    course="Coding and Design"
                    icon={Code}
                />
                <Quiz
                    course="Algebra Quiz"
                    icon={Algebra}
                />
                <Quiz
                    course="Science Quiz"
                    icon={Science}
                />
                <Quiz
                    course="Biology Quiz"
                    icon={Cell}
                />
                <Quiz
                    course="Figma Quiz"
                    icon={Figma}
                />
            </div>
        </div>
    )
}
