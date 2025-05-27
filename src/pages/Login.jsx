import Button from '../components/Button'
import Layout from '../components/Layout'
import WhiteButton from '../components/WhiteButton'
import styles from '../styles/login.module.css'
import man from '../images/man.jpg'

export default function Login() {
  return (
         <Layout image={man}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Welcome Back</h1>
                    <p>The faster you fill, the earlier your adventure begins</p>
                </div>
                <form action="" className={styles.myform}>
                    
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
                    <Button text="Sign in"/>
                    <WhiteButton text="Sign up with Google" />
                   </div>
                    
                </form>
                <p>Don't have an account? <a href="">Sign in</a></p>
                
            </div>
         </Layout>
    )

}
    