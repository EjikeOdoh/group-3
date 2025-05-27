import Button from "../components/Button";
import Layout from "../components/Layout";
import WhiteButton from "../components/WhiteButton";
import girl from "../images/girl.jpg"
import styles from "../styles/signup.module.css"

export default function SignUp() {
    return (
         <Layout image={girl}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Sign Up</h1>
                    <p>Start your 7 day Free Trial</p>
                </div>
                <form action="" className={styles.myform}>
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
                    <Button text="Create account"/>
                    <WhiteButton text="Sign up with Google" />
                   </div>
                    
                </form>
                <p>Already have an account? <a href="">Log in</a></p>
                
            </div>
         </Layout>
    )

}