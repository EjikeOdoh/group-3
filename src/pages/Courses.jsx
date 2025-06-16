import styles from '../styles/courses.module.css'
import Header from '../component/Header'

import Figma from '../images/figma.png'
import Management from '../images/management.png'
import Robotics from '../images/robotics.png'
import Analytics from '../images/analytics.png'

import T1 from '../images/tutor1.jpg'
import T2 from '../images/tutor2.jpg'
import T3 from '../images/tutor3.jpg'
import T4 from '../images/tutor4.jpg'

import Linkedin from '../images/linkedin.jpg'
import Biology from '../images/bio.jpg'

import English from '../images/english.jpg'
import Science from '../images/science.jpg'
import Backend from '../images/backend.jpg'

import Music from '../images/music.jpg'
import UX from '../images/ux.jpg'
import Programming from '../images/programming.jpg'

import Circular from '../component/Circular'
import { Link } from 'react-router'
import { Chip } from '@mui/material'
import { FaCode, FaCodepen } from 'react-icons/fa'
import { GiProgression } from 'react-icons/gi'
import { ImStopwatch } from 'react-icons/im'
import { MdDateRange } from 'react-icons/md'
import { CiMusicNote1 } from 'react-icons/ci'
import { GoPencil } from 'react-icons/go'

function Item(props) {
  return (
    <div style={!props.border ? { border: "1px solid #E5E5E5EE" } : undefined} className={styles.item}>
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

function Course(props) {
  return (
    <div className={styles.course}>
      <Item
        border={true}
        value={props.name}
        image={props.image}
      />

      <div className={styles.left}>
        <div className={styles.timeContainer}>
          <small>Remaining</small>
          <p>{props.remainingTime}</p>
        </div>

        <Circular value={props.percent} variant='determinate' color='success' label={props.label} />
      </div>
    </div>
  )
}


function Summary(props) {
  return (
    <div className={styles.summary}>
      <Item
        image={props.image}
        label={props.label}
        value={props.value}
        reverse={true}
        border={true}

      />
      {props.complete ?
        <Chip
          icon={<FaCodepen size={16} color='var(--new-white)' />}
          label="Completed"
          sx={{
            backgroundColor: '#7F55B1',
            fontFamily: 'inherit',
            fontWeight: 600,
            fontSize: '0.75rem',
            color: '#ffffff',
            borderRadius: '8px',
            gap: '8px',
            paddingInline: '8px'
          }} />
        :
        <Chip
          variant='outlined'
          icon={<GiProgression size={16} color='var(--text)' />}
          label="In progress"
          sx={{
            borderColor: 'var(--primary-border)',
            fontFamily: 'inherit',
            fontWeight: 600,
            fontSize: '0.75rem',
            color: 'var(--text)',
            borderRadius: '8px',
            gap: '6px',
            paddingInline: '8px'
          }} />

      }
    </div>
  )
}

function Session(props) {
  return (
    <div className={styles.session}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={props.image} />
        </div>
        <div>
          <div className={styles.texts}>
            <h4>{props.value}</h4>
            <div>
              <Chip
                variant='outlined'
                icon={props.icon}
                label={props.topic}
                sx={{
                  borderColor: 'var(--primary-border)',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  fontSize: '0.625rem',
                  color: 'var(--primary-border)',
                  borderRadius: '8px',
                  gap: '6px',
                  padding: '6px 8px',
                  height: '24px'
                }} />
              <small>{props.label}</small>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.tag}>
              <MdDateRange color='var(--primary-darker)' /> <p>{props.date}</p>
            </div>
            <div className={styles.tag}>
              <ImStopwatch color='var(--primary-darker)' /> <p>{props.time}</p>
            </div>
          </div>
        </div>

      </div>
      <Chip
        label={props.cta}
        sx={{
          backgroundColor: '#7F55B1',
          fontFamily: 'inherit',
          fontWeight: 600,
          color: '#ffffff',
          borderRadius: '8px',
          fontSize: '0.625rem',
          gap: '8px',
          width: '100px',
          height: '24px'
        }} />
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
          <div className="flex">
            <h3>Upcoming Sessions</h3>
            <p>Today</p>
          </div>

          <div className={styles.sessions}>
            <Session
              image={Music}
              icon={<CiMusicNote1 color="var(--primary-border)" size={16} />}
              value="Basic Instrumentals: Rhythm & Melody"
              topic="Music"
              label="Stephen Rose"
              date="June 07, 2025"
              time="9:00AM - 9:30AM"
              cta="Join now"
            />
            <Session
              image={UX}
              icon={<GoPencil color="var(--primary-border)" size={16} />}
              value="Laws of UX"
              topic="Figma"
              label="Frieda Odagboyi"
              date="June 07, 2025"
              time="9:00AM - 9:30AM"
              cta="In 1hr"
            />

            <Session
              image={Programming}
              icon={<FaCode color="var(--primary-border)" size={16} />}
              value="Programming 101"
              topic="Coding"
              label="Davis Jasper"
              date="June 07, 2025"
              time="9:00AM - 9:30AM"
              cta="In 2hr"
            />
          </div>

        </div>
        <div className={styles.second}>
          <div className="flex">
            <h3>Progress summary</h3>
            <Link className={styles.seeAll}>See all</Link>
          </div>

          <div>
            <Summary
              image={Backend}
              value="Back-end"
              label="01 June, 10:00 AM"
              complete={true}
            />

            <Summary
              image={Science}
              value="Science"
              label="21 May, 01:00 PM"
            />

            <Summary
              image={English}
              value="English"
              label="15 May, 01:00 PM"
            />
          </div>

        </div>
        <div className={styles.third}>

          <div className={styles.courses}>
            <div className="flex">
              <h3>All courses</h3>
              <Link className={styles.seeAll}> See all</Link>
            </div>
            <div className={styles.grid}>
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
                image={Robotics}
                label="Beginners"
                value="Robotics"
              />
              <Item
                image={Analytics}
                label="Beginners"
                value="Data Analytics"
              />
            </div>
          </div>
          <div className={styles.tutors}>
            <h3>Top 4 Tutors</h3>
            <div className={styles.grid}>
              <Item
                image={T1}
                label="UI/UX Design"
                value="Charles Daniel"
              />
              <Item
                image={T2}
                label="Python"
                value="Comfort Rain"
              />
              <Item
                image={T3}
                label="Marketing"
                value="Diego Justin"
              />
              <Item
                image={T4}
                label="AI Essential"
                value="Jubril Zoe"
              />
            </div>
          </div>
          <div className={styles.ongoing}>
            <h3>Ongoing Courses</h3>
            <div>
              <Course
                image={Linkedin}
                name="LinkedIn Optimization"
                remainingTime="25min"
                percent={80}
                label='80%'

              />
              <Course
                image={Biology}
                name="Biology"
                remainingTime="25min"
                percent={70}
                label='70%'

              />
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
