import { RxPerson } from "react-icons/rx";
import Layout from "../components/Layout";
import PButton from "../components/PButtons";
import lady from "../images/lady.png"
import styles from "../styles/profile.module.css"



export default function Profile() {

    return (
        <Layout image={lady}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.heading}>
                        <h3>Set up your profile</h3>
                        <p>Lets personalize your learning expirience!</p>
                    </div>

                    <div className={styles.icon}>
                        <RxPerson />
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
                    <button className={styles.next}>Next</button>
                </div>

            </div>

        </Layout>
    )
}
