import Input from "../components/Input"
import styles from "../styles/quizlist.module.css"
import time from "../images/time.png"
import Button from "../components/Button"
import { MdKeyboardArrowUp } from "react-icons/md"



export default function Quizlist () {
    return (
        <div>

            <div className={styles.container}>
                <h4>
                    What does HTML stands for?
                </h4>
                <Input letters="A" text="Hypertext markup language?"/>
                <Input letters="B" text="Hope tool makeup language?"/>
                <Input letters="C" text="Hyper trainer machine language?"/>
                <Input letters="D" text="Hyper text machine languages?"/>
                
                <div className={styles.btn}>
                <Button text="Submit Answers" />   
                </div>

                 <div>
                 

                    <div>
                <div className={styles.timer}>
                    <img src={time} alt="" />
                </div>
                <p>Timer Remaining</p>
                </div>
                <div>
                   <h3>Quiz Question List</h3>
                    <MdKeyboardArrowUp />
                    <Input text="Quiz question 1"/>
                    <Input text="Quiz question 2"/>
                    

                </div>
            </div>
            

            </div>
            <div></div>
        </div>
    )
}