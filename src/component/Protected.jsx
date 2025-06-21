import { Outlet, useNavigate } from 'react-router'
import styles from '../styles/protected.module.css'
import Sidebar from './Sidebar'
import Popup from './Popup'
import { useContext, useEffect, useRef, useState } from 'react'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import Button from '../component/Button'
import WhiteButton from '../component/WhiteButton'
import { closeModal, openModal } from '../utils/modal'
import { AuthContext, AuthReducerContext } from '../context/AuthContext'
import MobileHeader from './MobileHeader'


export default function Protected() {

  const navigate = useNavigate()

  const logoutRef = useRef(null)
  const { account } = useContext(AuthContext)
  const dispatch = useContext(AuthReducerContext)

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (account === "new") {
      navigate("/profile");
    }
  }, [account, navigate]);

  useEffect(() => {
    console.log('mobile menu action')
    if (isOpen) {
      document.body.overflow = "hidden"
    } else {
      document.body.overflow = ""
    }

    () => {
      document.body.overflow = ""
    }
  }, [isOpen])

  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        <Sidebar handleLogout={() => openModal(logoutRef)} />

      </div>
      <div style={isOpen ? { marginLeft: 0 } : undefined} className={styles.mobile}>
        <Sidebar handleLogout={() => openModal(logoutRef)} closeMenu={closeMenu} />
      </div>

      <div className={styles.content}>
        <MobileHeader isOpen={isOpen} handleMenu={toggleMenu} />
        <Outlet />
      </div>
      {/* Log out modal */}
      <Popup ref={logoutRef}>
        <div className={styles.modal}>
          <RiLogoutBoxRLine size={140} />
          <h1>Are you sure you want to log out?</h1>
          <div className={styles.btns}>
            <WhiteButton text="Cancel" handleClick={() => closeModal(logoutRef)} />
            <Button text="Logout" handleClick={() => {
              closeModal(logoutRef)
              dispatch({
                type: false,
                token: {}
              })
            }} />
          </div>
        </div>
      </Popup>
    </div>
  )
}
