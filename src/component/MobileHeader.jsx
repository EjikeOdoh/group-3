import React from 'react'
import styles from '../styles/mobileHeader.module.css'
import { HiMenuAlt3 } from 'react-icons/hi'
import Logo from '../images/lightLogo.svg'
import { IoClose } from 'react-icons/io5'


export default function MobileHeader(props) {
    return (
        <div className={styles.mobileHeader}>
            <div className={styles.logo}>
                <img src={Logo} />
            </div>
            <button onClick={props.handleMenu} className={styles.toggleBtn}>
                {props.isOpen ? <IoClose /> : <HiMenuAlt3 />}
            </button>
        </div>
    )
}
