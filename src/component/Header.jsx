import { LuSearch } from 'react-icons/lu'
import styles from '../styles/header.module.css'
import Avatar from '../images/avatar.jpeg'

export default function Header(props) {
  return (
    <div className={styles.header}>
        <h3>{props.label}</h3>
        <div className={styles.right}>
            <form className={styles.searchForm}>
                <input type='search' placeholder='Search' />
                <button>
                    <LuSearch size={30} />
                </button>
            </form>
            <div className={styles.avatar}>
                <img src={props.avatar ? props.avatar : Avatar} />
            </div>
        </div>
    </div>
  )
}
