import { RiSignalWifiErrorLine, RiWifiLine } from "react-icons/ri"
import Button from "../component/Button"
import Card from "../component/Card"
import Radio from "../component/Radio"
import WhiteButton from "../component/WhiteButton"
import styles from "../styles/quickSurvey.module.css"
import { PiBuildingOfficeLight, PiWifiXBold } from "react-icons/pi"
import { FiSmartphone, FiTablet } from "react-icons/fi"
import { CgLaptop } from "react-icons/cg"
import { LuClock3, LuRefreshCcwDot, LuTimer, LuWarehouse } from "react-icons/lu"
import { MdOutlineCancel, MdOutlineWifiLock } from "react-icons/md"
import { IoMdCheckmark } from "react-icons/io"
import { IoClose, IoSchoolOutline } from "react-icons/io5"
import { FaRegHourglass } from "react-icons/fa"
import { WiTime2 } from "react-icons/wi"
import { useState } from "react"

import One from '../images/1.svg'
import Two from '../images/2.svg'
import { useNavigate } from "react-router"

export default function Quicksurvey() {

    const navigate = useNavigate()

    const [step, setStep] = useState(1)

    const next = () => {
        if (step === 2) {
            navigate('/result')
        } else {
            setStep(prev => Math.min(prev + 1, 2))
        }
          
    }

    const previous = () => {
        if (step === 1) {
            navigate(-1)
        } else {
            setStep(prev => Math.max(prev - 1, 1))
        }      
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Quick Survey</h1>
                    <p>Let's personalize your experience</p>

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
                        step === 1 ? <>


                            <Card question="Do you have regular access to the internet?" >
                                <Radio
                                    icon={<RiWifiLine size={20} />}
                                    text="Yes"
                                />
                                <Radio
                                    icon={<PiWifiXBold size={20} />}
                                    text="Sometimes"
                                />
                                <Radio
                                    icon={<RiSignalWifiErrorLine size={20} />}
                                    text="Rarely"
                                />
                            </Card>

                            <Card question="What device do you use for learning?" >
                                <Radio
                                    icon={<FiSmartphone size={20} />}
                                    text="Phone"
                                />
                                <Radio
                                    icon={<FiTablet size={20} />}
                                    text="Tablet"
                                />
                                <Radio
                                    icon={<CgLaptop size={20} />}
                                    text="Computer"
                                />
                            </Card>


                            <Card question="Do you expirience power outages?" >
                                <Radio
                                    icon={<LuRefreshCcwDot size={20} />}
                                    text="Often"
                                />
                                <Radio
                                    icon={<LuClock3 size={20} />}
                                    text="Sometimes"
                                />
                                <Radio
                                    icon={<MdOutlineCancel size={20} />}
                                    text="Rarely"
                                />
                            </Card>
                        </> : <>
                            <Card question="Are you comfortable with video learning?" >
                                <Radio
                                    icon={<IoMdCheckmark size={20} />}
                                    text="Yes"
                                />
                                <Radio
                                    icon={<IoClose size={20} />}
                                    text="No"
                                />
                                <Radio
                                    icon={<MdOutlineWifiLock size={20} />}
                                    text="Depends on data"
                                />
                            </Card>

                            <Card question="Your current educational level?" >
                                <Radio
                                    icon={<LuWarehouse size={20} />}
                                    text="Primary"
                                />
                                <Radio
                                    icon={<PiBuildingOfficeLight size={20} />}
                                    text="Secondary"
                                />
                                <Radio
                                    icon={<IoSchoolOutline size={20} />}
                                    text="Tetiary"
                                />
                            </Card>


                            <Card question="How long can you study online?" >
                                <Radio
                                    icon={<FaRegHourglass size={20} />}
                                    text="Less than 30 minutes"
                                />
                                <Radio
                                    icon={<LuTimer size={20} />}
                                    text="Less than 1 hour"
                                />
                                <Radio
                                    icon={<WiTime2 size={20} />}
                                    text="Above 1 hour"
                                />
                            </Card>
                        </>
                    }
                </div>



                <div className={styles.btn}>
                    <WhiteButton
                        handleClick={previous}
                        text="Back" />
                    <Button
                        handleClick={next}
                        text="Next" />
                </div>

            </div>
        </div>

    )
}

