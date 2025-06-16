import { Link, useNavigate } from "react-router";
import Button from "../component/Button";
import Layout from "../component/Layout";
import WhiteButton from "../component/WhiteButton";
import girl from "../images/girl.jpg"
import styles from "../styles/signup.module.css"
import Popup from "../component/Popup";
import Medal from '../images/medal.png'
import { useContext, useRef, useState } from "react";
import { closeModal, openModal } from "../utils/modal";
import { AuthReducerContext } from "../context/AuthContext";

export default function Signup() {
    const navigate = useNavigate()
    const accountRef = useRef()

    const dispatch = useContext(AuthReducerContext)


    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)

    const register = (formData) => {
        let data = Object.fromEntries(formData)
        const fullName = data["username"]
        const names = String(fullName).split(" ")
        const first_name = names[0]
        const last_name = names[1]
        const username = first_name + last_name

        data = { ...data, username, first_name, last_name }
        console.log(data)

        setIsLoading(true)

        fetch("https://aishat.pythonanywhere.com/userprofile/register/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error()
            } 
            return res.json()
        })
        .then(({token})=> {
            console.log(token)
            setToken(token)
            openModal(accountRef)
        })
        .catch(err=>console.log(err))
        .finally(()=> setIsLoading(false))
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
                            <label htmlFor="name">Name</label>
                            <input id="name" name="username" type="text" placeholder="Enter your name" />
                        </div>
                        <div className={styles.cat}>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="text" placeholder="Enter your email" />
                        </div>
                        <div className={styles.cat}>
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="text" placeholder="Create a password" />
                            <p>Must be at least 8 characters</p>
                        </div>


                        <div className={styles.btn}>
                            <Button text="Create account" loading={isLoading} />
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
                       dispatch({
                        type: true,
                        token: token,
                        acctType: "new"
                       })
                       navigate("/profile")
                    }} />
                </div>
            </Popup>
        </Layout>
    )

}