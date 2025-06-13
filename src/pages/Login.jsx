import Button from '../component/Button'
import Layout from '../component/Layout'
import WhiteButton from '../component/WhiteButton'
import styles from '../styles/login.module.css'
import man from '../images/man.jpg'
import { Link } from 'react-router'
import { useContext, useState } from 'react'
import { AuthContext, AuthReducerContext } from '../context/AuthContext'
import { baseUrl } from '../utils/config'

export default function Login() {

    const dispatch = useContext(AuthReducerContext)
    const token = useContext(AuthContext)

    console.log(token)

    const [isLoading, setIsLoading] = useState(false)

    const signIn = (formData) => {
        const data = Object.fromEntries(formData)

        setIsLoading(true)

        fetch(baseUrl + "/userprofile/login/", {
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
                dispatch({
                    type: true,
                    token
                   })
            })
            .catch(err => alert(err))
            .finally(() => setIsLoading(false))
    }

    return (
        <Layout image={man}>
            <div className="content">
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>Welcome Back</h1>
                        <p>The faster you fill, the earlier your adventure begins</p>
                    </div>
                    <form action={signIn} className={styles.myform}>

                        <div className={styles.cat}>
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" type="text" placeholder="Enter your username" />
                        </div>
                        <div className={styles.cat}>
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="text" placeholder="Create a password" />
                        </div>

                        <div className={styles.forget}>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                Remember me
                            </label>
                            <a href="">Forgot Password</a>
                        </div>


                        <div className={styles.btn}>
                            <Button text="Sign in" loading={isLoading} />
                            <WhiteButton text="Sign in with Google" />
                        </div>

                    </form>
                    <p>Don't have an account? <Link to="/register">Sign up</Link></p>

                </div>
            </div>
        </Layout>
    )

}
