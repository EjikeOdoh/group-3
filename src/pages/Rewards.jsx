import styles from '../styles/reward.module.css'
import Header from '../component/Header'

import Coin from '../images/coin.png'
import B from '../images/badge.png'
import Bar from '../component/RewardBar'

function Row(props) {
  return (
    <div className={styles.row}>
      <div className={styles.value}>
        <h4>{props.label}</h4>
        <p >+{props.value}XP</p>
      </div>
      <p>{props.time}</p>
    </div>
  )
}

function Badge(props) {
  return (
    <div className={styles.badge}>
      <div className={styles.thumbnail}>
        <img src={props.badge} />
      </div>
      <p>{props.label}</p>
    </div>
  )
}

export default function Rewards() {
  return (
    <div className={styles.container}>
      <Header
        label="XP & Rewards"
      />
      <div className={styles.top}></div>
      <div className={styles.content}>
        <div className={styles.first}>
          <div className={styles.level}>
            <div className={styles.image}>
              <img src={Coin} />
            </div>
            <div className={styles.texts}>
              <h3>Level 3</h3>
              <div>
                <h2>160 XP</h2>
                <Bar variant='determinate' value={60} />
              </div>
            </div>
          </div>
          <small>You’re on a 5 day streak! Come back tomorrow to keep it up.</small>
        </div>

        <div className={styles.section}>
          <h3>XP History</h3>
          <div className={styles.rows}>
            <Row
              label="Completed Course"
              value="60"
              time="2 hours ago"
            />

<Row
              label="Lesson Finnished"
              value="10"
              time="Today"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h3>Rewards</h3>
          <div className={styles.badges}>
            <Badge
              badge={B}
              label="Virtual Badge"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
