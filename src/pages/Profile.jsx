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
    const learningStyleRef = useRef(null)
    const interestRef = useRef(null)

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
                            <PButton text="Preferred Learning Style" handleClick={()=> openModal(learningStyleRef)} />
                            <PButton text="Topics Of Interest" handleClick={()=> openModal(interestRef)} />
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
                        <Radio text="21-25 years" handleChange={()=>closeModal(ageRef)}/>
                        <Radio text="25-30 years" handleChange={()=>closeModal(ageRef)}/>
                        <Radio text="30 years" handleChange={()=>closeModal(ageRef)}/>
                    </div>
                </div>
            </Popup>

            {/* Internet type popup */}
            <Popup ref={internetRef}>
                <div className={styles.modal}>
                    <p>Internet Type</p>
                    <div className={styles.group}>
                        <Radio text="Wi-Fi" handleChange={()=>closeModal(internetRef)}/>
                        <Radio text="Mobile Data" handleChange={()=>closeModal(internetRef)} />
                        <Radio text="Shared Device" handleChange={()=>closeModal(internetRef)} />
                     
                    </div>
                </div>
            </Popup>


            {/* Preferred Learning style popup */}
            <Popup ref={learningStyleRef}>
                <div className={styles.modal}>
                    <p>Preferred Learning Style</p>
                    <div className={styles.group}>
                        <Radio text="Videos" handleChange={()=>closeModal(learningStyleRef)} />
                        <Radio text="Images" handleChange={()=>closeModal(learningStyleRef)} />
                        <Radio text="Text $ Images" handleChange={()=>closeModal(learningStyleRef)} />
                     
                    </div>
                </div>
            </Popup>


            {/* Topic Interest popup */}
            <Popup ref={interestRef}>
                <div className={styles.modal}>
                    <p>Topic of Interest</p>
                    <div className={styles.group}>
                        <Radio text="Science" handleChange={()=>closeModal(interestRef)} />
                        <Radio text="Art" handleChange={()=>closeModal(interestRef)} />
                        <Radio text="Sports" handleChange={()=>closeModal(interestRef)} />
                     
                    </div>
                </div>
            </Popup>
        </Layout>
    )
}
