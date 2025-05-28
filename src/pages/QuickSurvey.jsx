import { RiSignalWifiErrorLine, RiWifiLine } from "react-icons/ri"
import Button from "../components/Button"
import Card from "../components/Card"
import Row from "../components/Row"
import WhiteButton from "../components/WhiteButton"
import styles from "../styles/quicksurvey.module.css"
import { PiBuildingOfficeLight, PiWifiXBold } from "react-icons/pi"
import { FiSmartphone, FiTablet } from "react-icons/fi"
import { CgLaptop } from "react-icons/cg"
import { LuClock3, LuRefreshCcwDot, LuTimer, LuWarehouse } from "react-icons/lu"
import { MdOutlineCancel, MdOutlineWifiLock } from "react-icons/md"
import { IoMdCheckmark } from "react-icons/io"
import { IoClose, IoSchoolOutline } from "react-icons/io5"
import { FaHourglass } from "react-icons/fa"
import { WiTime2 } from "react-icons/wi"
import { useState } from "react"

import One from '../images/step2.png'
import Two from '../images/step1.png'

export default function Quicksurvey() {

    const [step, setStep] = useState(2)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Quick Survey</h1>
                    <p>Let's personalize your expirience</p>
                    <div className={styles.step}>
                        {
                            step === 1 ?
                            <img src={One} /> :
                               <img src={Two} />
                        }
                    </div>
                </div>

                <div className={styles.cards}>

                    {
                        step === 1 ?   <>


                        <Card question="Do you have regular access to the internet?" >
                            <Row
                                icon={<RiWifiLine />}
                                text="Yes"
                            />
                            <Row
                                icon={<PiWifiXBold />}
                                text="Sometimes"
                            />
                            <Row
                                icon={<RiSignalWifiErrorLine />}
                                text="Rarely"
                            />
                        </Card>

                        <Card question="What device do you use for learning?" >
                            <Row
                                icon={<FiSmartphone />}
                                text="Phone"
                            />
                            <Row
                                icon={<FiTablet />}
                                text="Tablet"
                            />
                            <Row
                                icon={<CgLaptop />}
                                text="Computer"
                            />
                        </Card>


                        <Card question="Do you expirience power outages?" >
                            <Row
                                icon={<LuRefreshCcwDot />}
                                text="Often"
                            />
                            <Row
                                icon={<LuClock3 />}
                                text="Sometimes"
                            />
                            <Row
                                icon={<MdOutlineCancel />}
                                text="Rarely"
                            />
                        </Card>
                    </> :     <>
                        <Card question="Are you comfortable with video learning?" >
                            <Row
                                icon={<IoMdCheckmark />}
                                text="Yes"
                            />
                            <Row
                                icon={<IoClose />}
                                text="No"
                            />
                            <Row
                                icon={<MdOutlineWifiLock />}
                                text="Depends on data"
                            />
                        </Card>

                        <Card question="Your current educational level?" >
                            <Row
                                icon={<LuWarehouse/>}
                                text="Primary"
                            />
                            <Row
                                icon={<PiBuildingOfficeLight />}
                                text="Secondary"
                            />
                            <Row
                                icon={<IoSchoolOutline />}
                                text="Tetiary"
                            />
                        </Card>


                        <Card question="How long can you study online?" >
                            <Row
                                icon={<FaHourglass />}
                                text="Less than 30 minutes"
                            />
                            <Row
                                icon={<LuTimer />}
                                text="Less than 1 hour"
                            />
                            <Row
                                icon={<WiTime2 />}
                                text="Above 1 hour"
                            />
                        </Card>
                    </>
                    }
                  

                

                </div>



                <div className={styles.btn}>
                    <WhiteButton text="Back" />
                    <Button text="Next" />
                </div>

            </div>
        </div>

    )
}

