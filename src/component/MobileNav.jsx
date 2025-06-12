import { MdClose, MdMenu } from 'react-icons/md'
import styles from '../styles/mobileNav.module.css'
import { Link, NavLink } from 'react-router'
import Logo from '../images/lightLogo.svg'

export default function MobileNav(props) {
    return (
        <nav className={styles.mobileNav}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <img src={Logo} />
                </div>
                <button onClick={props.handleClose} className={styles.menuBtn}>
                    <MdClose size={24} />
                </button>
            </div>

            <ul className={styles.menu}>
                <li><NavLink to="/" onClick={props.handleClose}>Home</NavLink></li>
                <li><a onClick={props.handleClose}>Courses</a></li>
                <li><a href="#faq" onClick={props.handleClose}>FAQs</a></li>
            </ul>
        </nav>
    )
}
