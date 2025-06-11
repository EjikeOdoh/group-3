import React from 'react'
import Header from '../component/Header'
import { IoMdFunnel } from "react-icons/io"
import styles from "../styles/notifications.module.css"
import Button from "../component/Button"
import { MdKeyboardArrowDown } from "react-icons/md"
import { GoPerson } from "react-icons/go"
import { IoChatbox, IoChatboxOutline } from "react-icons/io5"
import { RxCaretDown } from "react-icons/rx"
import { VscListFilter } from "react-icons/vsc"

export default function Notifications() {
  return (
    <div className={styles.container}>
      <Header
        label="Notifications"
      />

      <div className={styles.top}></div>

      <div className={styles.content}>
        <div className={styles.all}>
          <h4>
            All Notifications
          </h4>

          <div className={styles.today}>
            <VscListFilter size={45} />
            <Button text="Today" icon={<RxCaretDown size={30} />} />
          </div>

        </div>
        <div className={styles.row}>

          <div className={styles.left}>
            <div className={styles.icon}>
              <GoPerson size={24} />
            </div>

            <div className={styles.text}>
              <h4>
                Congratulations! your profile is 100% complete
              </h4>
              <p>
                Welcome to the most adaptive online learning platform
              </p>
            </div>
          </div>
          <p>
            08/6/2025
          </p>
        </div>
        <div className={styles.row}>

          <div className={styles.left}>
            <div className={styles.icon}>
              <IoChatboxOutline size={24} />
            </div>

            <div className={styles.text}>
              <h4>
                Lesson at 2:PM
              </h4>
              <p>
                Reminder to download lessons
              </p>
            </div>
          </div>
          <p>
            08/6/2025
          </p>

        </div>



      </div>

    </div>
  )
}
