import styles from "../styles/info.module.css"
import avatar from "../images/avatar.png"
import WhiteButton from "../components/WhiteButton"
import Row from "../components/Row"

export default function Info() {
    return (
        <div className={styles.container}>

            <div className={styles.text}>
                <h2>Profile Information</h2>
                <p>Manage your profile details and log in credentials
                </p>
            </div>
            <div className={styles.avatar}>
                <img src={avatar} alt="" />
            </div>

           <div className={styles.wrap}>
            <div className={styles.btn}>
                <WhiteButton text="Replace" />
                <WhiteButton text="Remove" />
            </div>
            <p>
                Image sizes should be at 320x big, and less than 500kb.Allowed files, png and jpg.
            </p>
           </div>
            

            <form action="" className={styles.myform}>
                <div className={styles.cat}>
                    <label htmlFor="">First name</label>
                    <input type="text" placeholder="Edit User name" />
                </div>
                <div className={styles.cat}>
                    <label htmlFor="">Last name</label>
                    <input type="text" placeholder="Edit User name" />
                </div>



            </form>

        </div>
    )


}