import { Outlet, useNavigate } from 'react-router'
import styles from '../styles/protected.module.css'
import Sidebar from './Sidebar'
import Popup from './Popup'
import { useContext, useEffect, useRef } from 'react'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import Button from '../component/Button'
import WhiteButton from '../component/WhiteButton'
import { closeModal, openModal } from '../utils/modal'
import { AuthContext, AuthReducerContext } from '../context/AuthContext'


export default function Protected() {

  const navigate = useNavigate()

  const logoutRef = useRef(null)
  const {account} =  useContext(AuthContext)
  const dispatch = useContext(AuthReducerContext)

  useEffect(() => {
    if (account === "new") {
      navigate("/profile");
    }
  }, [account, navigate]);


  return (
    <div className={styles.container}>
      <Sidebar handleLogout={() => openModal(logoutRef)} />
      <div className={styles.content}>
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
                token: null
              })
            }} />
          </div>
        </div>
      </Popup>
    </div>
  )
}
