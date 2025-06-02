import styles from "../styles/info.module.css"
import avatar from "../images/avatar.png"
import WhiteButton from "../components/WhiteButton"
import Row from "../components/Row"

export default function Info (){
    return(
        <div>
            <h2>Profile Information</h2>
            <p>Manage your profile details and log in credentials
             </p>
             <div>
                <img src={avatar} alt="" />
             </div>
            <WhiteButton text="Replace"/>
            <WhiteButton text="Remove"/>
           
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