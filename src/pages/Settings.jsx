import styles from '../styles/setting.module.css'
import Header from '../component/Header'
import Avatar from '../images/avatar.jpeg'
import WhiteButton from '../component/WhiteButton'

export default function Settings() {
  return (
    <div className={styles.container}>
      <Header
        label="Profile"
      />
      <div className={styles.top}></div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.pageInfo}>
            <h2>
              Profile Information
            </h2>
            <small>Manage your profile details and log in credentials</small>
          </div>
          <div className={styles.photo}>
            <img src={Avatar} />
          </div>

          <div className={styles.pageAction}>
            <div className={styles.btns}>
              <WhiteButton text="Replace" />
              <WhiteButton text="Remove" />
            </div>
            <small>Image sizes should be at 320x big, and less than 500kb.Allowed files, png and jpg.</small>
          </div>
        </div>

        <form className={styles.myForm}>
          <div className={styles.cat}>
            <label htmlFor="">First name</label>
            <input type="text" placeholder="Edit first name" />
          </div>

          <div className={styles.cat}>
            <label htmlFor="">Last name</label>
            <input type="text" placeholder="Edit last name" />
          </div>
        </form>

      </div>
    </div>
  )
}
