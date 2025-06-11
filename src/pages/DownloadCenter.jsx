import { RiSimCardFill } from 'react-icons/ri'
import Header from '../component/Header'
import styles from '../styles/downloadCenter.module.css'
import Button from '../component/Button'
import WhiteButton from '../component/WhiteButton'
import { LiaDownloadSolid } from 'react-icons/lia'

// Thumbnails
import Figma from '../images/figma.png'
import Management from '../images/management.png'
import Robotics from '../images/robotics.png'
import Analytics from '../images/analytics.png'

function Row(props) {
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <div className={styles.thumbnail}>
                    <img src={props.thumbnail} />
                </div>
                <div className={styles.texts}>
                    <h4>{props.course}</h4>
                    <p>{props.size}</p>
                </div>
            </div>
            <div>

                {props.complete ?
                    <Button text="Downloaded" /> :
                    <WhiteButton
                        text="Download"
                        icon={<LiaDownloadSolid size={20} />}
                    />}
            </div>
        </div>
    )
}

export default function DownloadCenter() {
    return (
        <div className={styles.container}>
            <Header
                label="Courses"
            />
            <div className={styles.top}></div>
            <div className={styles.content}>
                <h2>Courses</h2>

                <div className={styles.notice}>
                    <RiSimCardFill size={32} />
                    <p>Offline learning bundles include video, audio and PDFs, Downloads are available for 7 days</p>
                </div>

                <Row
                    course="Robotics"
                    size="800MB"
                    thumbnail={Robotics}
                />


                <Row
                    course="Robotics"
                    size="800MB"
                    thumbnail={Robotics}
                />
            </div>

        </div>
    )
}