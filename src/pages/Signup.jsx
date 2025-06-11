import { Link, useNavigate } from "react-router";
import Button from "../component/Button";
import Layout from "../component/Layout";
import WhiteButton from "../component/WhiteButton";
import girl from "../images/girl.jpg"
import styles from "../styles/signup.module.css"
import Popup from "../component/Popup";
import Medal from '../images/medal.png'
import { useRef } from "react";
import { closeModal, openModal } from "../utils/modal";

export default function Signup() {
    const navigate = useNavigate()
    const accountRef = useRef()

    const register = () => {

        openModal(accountRef)
        // navigate('/profile', { replace: true })
    }

    return (
        <Layout image={girl}>
            <div className="content">
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>Sign Up</h1>
                        <p>Start your 7 day Free Trial</p>
                    </div>
                    <form action={register} className={styles.myform}>
                        <div className={styles.cat}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className={styles.cat}>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className={styles.cat}>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder="Create a password" />
                            <p>Must be at least 8 characters</p>
                        </div>


                        <div className={styles.btn}>
                            <Button text="Create account" />
                            <WhiteButton text="Sign up with Google" />
                        </div>

                    </form>
                    <p>Already have an account? <Link to="/login">Log in</Link></p>

                </div>
            </div>
            <Popup ref={accountRef}>
                <div className={styles.modal}>
                    <div className={styles.image}>
                        <img src={Medal} />
                    </div>
                    <div className={styles.texts}>
                        <h1>Account Created</h1>
                        <p>Your LearnFlex account has been created successfully</p>
                    </div>
                    <Button text="Alright" handleClick={() => {
                        closeModal(accountRef)
                        navigate('/survey')
                    }} />
                </div>
            </Popup>
        </Layout>
    )

}