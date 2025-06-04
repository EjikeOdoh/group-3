import { Outlet } from 'react-router'
import styles from '../styles/protected.module.css'
import Sidebar from './Sidebar'

export default function Protected() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
