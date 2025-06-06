import styles from "../styles/support.module.css"
import agent from "../images/agent.png"
import { BsChatText } from "react-icons/bs"
import { RxCaretRight } from "react-icons/rx"
import { MdOutlinePhone } from "react-icons/md"
import { GoArrowUpRight } from "react-icons/go"
import { HiArrowUturnRight } from "react-icons/hi2"
import { FaChevronRight } from "react-icons/fa"
import { LuPhone } from "react-icons/lu"
import { RiArrowGoForwardLine } from "react-icons/ri"

function Row(props) {
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <div className={styles.icon}>
                    {props.icon}
                </div>
                <p>{props.text}</p>
            </div>

            <FaChevronRight
                size={24} />
        </div>
    )
}

export default function Support() {
    return (

        <div className={styles.container}>
            <div className={styles.help}>
                <div className={styles.agent}>
                    <img src={agent} alt="" />
                </div>

                <p>
                    We are here to Help!
                </p>
            </div>
            <div className={styles.group}>
                <div className={styles.support}>
                    <h3>Support</h3>
                    <Row
                        text="Live Chart"
                        icon={<BsChatText size={24} color="#7F55B1" />}
                    />
                    
                    
                    <Row
                        text="Contact us"
                        icon={<LuPhone size={24} color="#7F55B1" />}
                    />
                    

                    

                </div>


                <div className={styles.support}>
                    <h3>Legal</h3>
                    <Row
                        text="Terms & Conditions"
                        icon={<GoArrowUpRight size={24} color="#7F55B1" />}
                    />
                    <Row
                        text="Privacy Policy"
                        icon={<RiArrowGoForwardLine size={24} color="#7F55B1" />}
                    />
                </div>

            </div>
        </div>

    )

}