import { RxCaretRight } from "react-icons/rx"
import styles from "../styles/courses.module.css"
import vid from "../images/vid.png"
import { IoStarOutline } from "react-icons/io5"
import { GrStatusGood } from "react-icons/gr"
import { BsPauseCircle } from "react-icons/bs"
import { FaRegCircle } from "react-icons/fa"
 
export default function Courses () {
    return (
        <div>
            UI Essentials  <RxCaretRight /> Introduction to UI Designs
        <div>

        </div>

        <div>
            <img src={vid} alt="" />
        </div>
        UI Essential   <IoStarOutline />   4,9 (9.865)   <RxCaretRight /> 
        5 Sessions


        User Interface (UI) design focuses on creating visually appealing and user-friendly digital products. A good UI makes it easy for users to interact with a website, app, or software,see more their overall experience.......See more


       <div className={styles.module}>
        <div>
            <h4>Module 1   16:00</h4>
        </div>

        <div>
        <GrStatusGood /> <p>Introduction to UI Designs  4:00
        </p>
        </div>
        <div>
        <GrStatusGood /> <p>Difference between UI and UX  4:00
        </p>
        </div>
        <div>
        <BsPauseCircle /><p>Principles of  good UI Designs
        </p>
        </div>
        <div>
        <FaRegCircle /> <p>Principles of  good UI Designs
        </p>
        </div>

       </div>
        
       
        </div>
        
    )
}