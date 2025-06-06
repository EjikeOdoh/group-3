import Button from '../component/Button'
import Layout from '../component/Layout'
import WhiteButton from '../component/WhiteButton'
import styles from '../styles/login.module.css'
import man from '../images/man.jpg'
import { Link } from 'react-router'
import { useContext } from 'react'
import { AuthReducerContext } from '../context/AuthContext'

export default function Login() {

    const dispatch = useContext(AuthReducerContext)

    const signIn = async () => {
        dispatch({type: true})
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
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className={styles.cat}>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder="Create a password" />
                        </div>

                        <div className={styles.forget}>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                Remember me
                            </label>
                            <a href="">Forgot Password</a>
                        </div>


                        <div className={styles.btn}>
                            <Button text="Sign in" />
                            <WhiteButton text="Sign up with Google" />
                        </div>

                    </form>
                    <p>Don't have an account? <Link to="/register">Sign up</Link></p>

                </div>
            </div>
        </Layout>
    )

}
