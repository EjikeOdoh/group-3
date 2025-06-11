import { NavLink } from 'react-router'
import styles from '../styles/sidebar.module.css'
import Logo from '../images/logo.svg'
import { RxDashboard } from 'react-icons/rx'
import { BiBook } from 'react-icons/bi'
import { RiCalendarScheduleLine, RiLogoutBoxRLine } from 'react-icons/ri'
import { MdOutlineDownloadForOffline, MdOutlineNotificationAdd, MdOutlineSupportAgent } from 'react-icons/md'
import { LiaCogSolid, LiaTrophySolid } from 'react-icons/lia'
import { LuMessageCircleQuestion } from 'react-icons/lu'

export function MenuItem(props) {
    return (
        <NavLink to={props.to} className={({isActive})=>isActive ? styles.active : styles.menuItem}>
            {props.icon} {props.label}
        </NavLink>
    )
}


export default function Sidebar(props) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <MenuItem
                    to="/"
                    icon={<RxDashboard size={20} />}
                    label="Dashboard"
                />
                <MenuItem
                    to="/courses"
                    icon={<BiBook size={20} />}
                    label="Courses"
                />
                <MenuItem
                    to="/download"
                    icon={<MdOutlineDownloadForOffline size={20} />}
                    label="Download Center"
                />
                <MenuItem
                    to="/schedule"
                    icon={<RiCalendarScheduleLine size={20} />}
                    label="Calenders"
                />
                <MenuItem
                    to="/rewards"
                    icon={<LiaTrophySolid size={20} />}
                    label="Xp & Rewards"
                />
                <MenuItem
                    to="/notifications"
                    icon={<MdOutlineNotificationAdd size={20} />}
                    label="Notifications"
                />
                <MenuItem
                    to="/quizzes"
                    icon={<LuMessageCircleQuestion size={20} />}
                    label="Quizzes & Challenges"
                />
                <MenuItem
                    to="/support"
                    icon={<MdOutlineSupportAgent size={20} />}
                    label="Help & Support"
                />

            </div>
            <div className={styles.bottom}>
                <MenuItem
                    to="/settings"
                    icon={<LiaCogSolid size={20} />}
                    label="Settings"
                />

                <button onClick={props.handleLogout} className={styles.menuItem}>
                    <RiLogoutBoxRLine size={20} />
                    Log Out
                </button>
            </div>

        </div>
    )
}
