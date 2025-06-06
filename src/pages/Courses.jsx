import styles from '../styles/courses.module.css'
import Header from '../component/Header'

import Figma from '../images/figma.png'
import Management from '../images/management.png'
import Robotics from '../images/robotics.png'
import Analytics from '../images/analytics.png'

function Item(props) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={props.image} />
      </div>
      <div className={styles.texts}>
        {
          !props.reverse ? <>
            <small>{props.label}</small>
            <h4>{props.value}</h4></> :
            <>
              <h4>{props.value}</h4>
              <small>{props.label}</small>
            </>
        }

      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <div className={styles.container}>
      <Header
        label="Courses"
      />
      <div className={styles.content}>
        <div className={styles.first}>

        </div>
        <div className={styles.second}>

        </div>
        <div className={styles.third}>

          <div className={styles.courses}>
            <div className="flex">
              <h3>All courses</h3>
            </div>
            <div>
              <Item
                image={Figma}
                label="Beginners"
                value="Figma Workshop"
              />
               <Item
                image={Management}
                label="Beginners"
                value="Company Management"
              />
               <Item
                image={Figma}
                label="Beginners"
                value="Robotics"
              />
               <Item
                image={Figma}
                label="Beginners"
                value="Data Analytics"
              />
            </div>
          </div>
          <div className={styles.tutors}>
            <h3>Top 4 Tutors</h3>
            <div>
              <Item

              />
            </div>
          </div>
          <div className={styles.ongoing}>
            <h3>Ongoing Courses</h3>
          </div>

        </div>
      </div>
    </div>
  )
}
