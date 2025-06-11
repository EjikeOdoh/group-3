import styles from '../styles/dashboard.module.css'
import Cap from '../images/graduate.png'
import Header from '../component/Header'


import UI from '../images/ui.png'
import Code from '../images/coding.png'
import Book from '../images/book.png'

import Badge from '../images/badge.png'
import Star from '../images/shield.png'
import { FaFilePdf, FaWifi } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { Button, Switch } from '@mui/material'
import { BsHeadset } from 'react-icons/bs'
import { RiVideoLine } from 'react-icons/ri'
import { DateCalendar } from '@mui/x-date-pickers'
import Calender from '../component/Calender'

export function Plan(props) {
  return (
    <div className={styles.plan}>
      <div className={styles.time}>
        <p>{props.time}</p>
      </div>
      <div className={styles.left}>
        <div className={styles.texts}>
          <h4>{props.subject}</h4>
          <small>{props.schedule}</small>
        </div>
        <button>
          {props.format}
        </button>
      </div>
    </div>
  )
}

export function Course(props) {
  return (
    <div className={styles.course}>
      <div className={styles.left}>
        <div className={styles.thumbnail}>
          <img src={props.thumbnail} />
        </div>
        <p>{props.name}</p>
      </div>
      <div className={styles.middle}>
        <small>Remaining</small>
        <p>{props.time}</p>
      </div>

      <div className={styles.right}>
        {props.percent}
      </div>

    </div>
  )
}

export function Reward(props) {
  return (
    <div className={styles.rewardItem}>
      <div className={styles.rewardIcon}>
        <div className={styles.icon}>
          <img src={props.icon} />
        </div>
        <p>{props.label}</p>
      </div>
      <p>{props.value}</p>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Header
        label="Hello Cecilia, ready to learn and earn today?"
      />
      <div className={styles.content}>
        <div className={styles.cta}>
          <div className={styles.left}>
            <h1>Today's Learning Plan</h1>
            <p>30 minutes of science + 1 Quiz</p>
            <button>Continue Learning</button>
          </div>
          <div className={styles.right}>
            <img src={Cap} />
          </div>
        </div>

        <div className={styles.planner}>
          <div className={styles.top}>
            <h3>Flexible Planner & Time Bank</h3>
            <p>You are most focused at 4 PM: How about a 30 minutes session?</p>
          </div>
          <div className={styles.bottom}>
            <h3>Wednesday</h3>
            <div className={styles.plans}>
              <Plan
                time="4:00PM"
                subject="English"
                schedule="4:00PM-4:30PM"
                format="Video"
              />
              <Plan
                time="5:00PM"
                subject="Coding"
                schedule="5:00PM-5:30PM"
                format="Audio"
              />
              <Plan
                time="6:00PM"
                subject="Maths"
                schedule="6:00PM-6:45PM"
                format="Text"
              />
              <Plan
                time="7:00PM"
                subject="Health"
                schedule="7:00PM-7:30PM"
                format="Quiz"
              />
            </div>
          </div>
        </div>

        <div className={styles.courses}>
          <h3>Ongoing Courses</h3>
          <div className={styles.list}>
            <Course
              name="UI essentials"
              percent="60%"
              time="20min"
              thumbnail={UI}
            />

            <Course
              name="Coding"
              percent="60%"
              time="15min"
              thumbnail={Code}
            />

            <Course
              name="English"
              percent="60%"
              time="25min"
              thumbnail={Book}
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.learningMode}>
            <button> <div><FaWifi color='var(--text)' />Smart Learning Mode Selector
            </div> <IoIosArrowForward color='var(--text)' /></button>
            <div className={styles.modes}>
              <Button startIcon={<BsHeadset />} className={styles.mode} variant="outlined">Audio</Button>
              <Button startIcon={<RiVideoLine />} className={styles.mode} variant="outlined">Video</Button>
              <Button startIcon={<FaFilePdf />} className={styles.mode} variant="outlined">Pdf</Button>
            </div>
            <div className={styles.switch}><p>Poor connection? Switch to audio mode</p> <Switch /> </div>
          </div>
          <div className={styles.calender}>
            {/* <DateCalendar className={styles.actualCalender} /> */}
            <Calender />
          </div>
          <div className={styles.reward}>
            <h3>My reward System</h3>
            <div className={styles.rewards}>
              <Reward
                label="Virtual Badge"
                value="50 XP"
                icon={Badge}
              />
              <Reward
                label="Total XP Earned"
                value="75 XP"
                icon={Star}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
