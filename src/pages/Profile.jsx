import { RxPerson } from "react-icons/rx";
import Layout from "../component/Layout";
import PButton from "../component/PButton";
import lady from "../images/lady.png"
import styles from "../styles/profile.module.css"
import { useNavigate } from "react-router";



export default function Profile() {

    const navigate = useNavigate()

    const next =() => {
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
                        <PButton text="Age group" />
                        <PButton text="Internet Type" />
                        <PButton text="Preferred Learning Style" />
                        <PButton text="Topics Of Interest" />
                    </div>


                </div>
                <div className= {styles.buttom}>
                    <button className={styles.skip}>Skip</button>
                    <button className={styles.next} onClick={next}>Next</button>
                </div>

            </div>

            </div>

        </Layout>
    )
}
