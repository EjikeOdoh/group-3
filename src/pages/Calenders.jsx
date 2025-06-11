import styles from '../styles/calenders.module.css'
import Header from '../component/Header'
import Calender from '../component/Calender'

function Card(props) {
  return (
    <div className={styles.card}>
      <h3>{props.reminder}</h3>
      <div>
        <span>Deadline</span>
        <span>{props.date}</span>
        <span>{props.time}</span>
      </div>
    </div>
  )
}

export default function Calenders() {
  return (
    <div className={styles.container}>
      <Header
        label="Calender"
      />
      <div className={styles.top}></div>
      <div className={styles.content}>
        <div className={styles.cards}>
          <Card
            reminder="Complete Course on Science"
            date="June 16, 2025"
            time="9:00AM"
          />

          <Card
            reminder="Complete Course on Science"
            date="June 16, 2025"
            time="9:00AM"
          />

          <Card
            reminder="Complete Course on Science"
            date="June 16, 2025"
            time="9:00AM"
          />

          <Card
            reminder="Complete Course on Science"
            date="June 16, 2025"
            time="9:00AM"
          />
        </div>
        <Calender />
      </div>
    </div>
  )
}
