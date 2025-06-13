import { RxPerson } from "react-icons/rx";
import Layout from "../component/Layout";
import PButton from "../component/PButton";
import lady from "../images/lady.png"
import styles from "../styles/profile.module.css"
import { useNavigate } from "react-router";
import Popup from "../component/Popup";
import { useRef } from "react";
import Radio from "../component/Radio";
import { closeModal, openModal } from "../utils/modal";



export default function Profile() {

    const ageRef = useRef(null)
    const internetRef = useRef(null)

    const navigate = useNavigate()

    const next = () => {
        navigate('/survey')
    }

    const skip = () => {
        navigate('/survey')
    }

    return (
        <Layout image={lady}>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.heading}>
                            <h3>Set up your profile</h3>
                            <p>Lets personalize your learning expirience!</p>
                        </div>

                        <div className={styles.icon}>
                            <RxPerson size={72} />
                        </div>

                        <div className={styles.btns}>
                            <PButton text="Age group" handleClick={() => openModal(ageRef)} />
                            <PButton text="Internet Type" handleClick={()=> openModal(internetRef)} />
                            <PButton text="Preferred Learning Style" />
                            <PButton text="Topics Of Interest" />
                        </div>


                    </div>
                    <div className={styles.buttom}>
                        <button className={styles.skip} onClick={skip} >Skip</button>
                        <button className={styles.next} onClick={next}>Next</button>
                    </div>

                </div>

            </div>

            {/* Modals */}

            {/* Age group popup */}
            <Popup ref={ageRef}>
                <div className={styles.modal}>
                    <p>Age Group</p>
                    <div className={styles.group}>
                        <Radio text="16-20 years" handleChange={()=>closeModal(ageRef)} />
                        <Radio text="21-25 years" />
                        <Radio text="25-30 years" />
                        <Radio text="30 years" />
                    </div>
                </div>
            </Popup>

            {/* Internet type popup */}
            <Popup ref={internetRef}>
                <div className={styles.modal}>
                    <p>Internet Type</p>
                    <div className={styles.group}>
                        <Radio text="Wi-Fi" />
                        <Radio text="Mobile Data" />
                        <Radio text="Shared Device" />
                     
                    </div>
                </div>
            </Popup>
        </Layout>
    )
}
