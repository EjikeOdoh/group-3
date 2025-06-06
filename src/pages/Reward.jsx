import styles from "../styles/reward.module.css"
import coin from "../images/coin.png"
import { HiOutlineCheckBadge } from "react-icons/hi2"


export default function Reward () {
    return(
        <div className={styles.reward}>
            <div className={styles.level}>
                <div>
                    <img src={coin} alt="" />
                </div>
                <p>Level 3</p>
                <p>160 XP</p>
            </div>
            <p>You’re on a 5 day streak! Come back tomorrow to keep it up.</p>
            
            <div>
            <h3>XP History</h3>
            <div className={styles.course}>
                <div>
                    <p>Completed course</p>
                    <p>+60 XP</p>
                </div>
                <p>2 hours ago</p>
            </div>

            <div className={styles.finished}>
                <div>
                    <p>Lesson Finished</p>
                    <p>+10 XP</p>
                </div>
                <p>Today</p>
            </div>
            </div>

           <div>
            <p>Reward</p>
            <div>
                <HiOutlineCheckBadge />
                <p>
                Virtual Badge
                </p>
            </div>
           </div>

        </div>
    )
}