import styles from '../styles/landingPage.module.css'
import Logo from '../images/logo.svg'
import Cover from '../images/video.png'
import Idea from '../images/idea.png'
import Wifi from '../images/wifi.png'
import Star from '../images/coin.png'
import Laptop from '../images/laptop.png'
import Hand from '../images/cta.png'
import Tiny from '../images/tiny.png'
import { FaMinus } from 'react-icons/fa'
import { PiCaretDownBold } from 'react-icons/pi'
import { SiInstagram } from 'react-icons/si'
import { CiLinkedin, CiTwitter } from 'react-icons/ci'
import { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Link, useNavigate } from 'react-router'
import MobileNav from '../component/MobileNav'


function Item(props) {

    const activeStyle = {
        backgroundColor: "#ECE6F3",
        borderLeft: "1px solid #7F55B1",
    }

    return (
        <div style={props.active === true ? activeStyle : undefined} className={styles.item}>
            <div className={styles.question}>
                <p style={props.active === true ? { fontWeight: 600, fontSize: "1.125rem" } : undefined}>{props.question}</p>
                <button onClick={() => props.handleClick(props.id)}>
                    {
                        props.active === true ? <FaMinus /> : <PiCaretDownBold />
                    }
                </button>
            </div>
            {
                props.active === true ? <p>{props.answer}</p> : null
            }

        </div>
    )
}

function FooterCol(props) {

    const p = props.options.map(x => (<p key={x}>{x}</p>))

    return (
        <div className={styles.footerCol}>
            <h3>{props.heading}</h3>
            {p}
        </div>
    )
}

export default function LandingPage() {

    const navigate = useNavigate()

    const [questions, setQuestions] = useState([
        {
            "id": 1,
            "active": false,
            "question": "How do I earn XP, rewards, and Badges?",
            "answer": "By completing lessons, achieving milestones, and demonstrating progress in the app, which can be redeemed or displayed on your profile."
        },
        {
            "id": 2,
            "active": true,
            "question": "Can I lose XP or rewards?",
            "answer": "No, once earned, XP and rewards remain in your account. However, some time-limited rewards may expire if not used."
        },
        {
            "id": 3,
            "active": false,
            "question": "Are Badges just for show, or do they have benefits?",
            "answer": "Badges showcase your achievements and may unlock exclusive perks, bonus content, or special recognition in the community."
        },
        {
            "id": 4,
            "active": true,
            "question": "How often are new rewards added?",
            "answer": "We regularly introduce new rewards and challenges based on user feedback and app updates—check the rewards section frequently!"
        },
        {
            "id": 5,
            "active": false,
            "question": "Can I share my Badges on social media?",
            "answer": "Yes! You can easily share your achievements on social platforms directly from your profile to celebrate your progress."
        }
    ])
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(true);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const selectQ = (id) => {
        console.log(id)
        setQuestions(prev => prev.map(q => {
            if (q.id === id) {
                return { ...q, active: true }
            } else {
                return { ...q, active: false }
            }
        }))
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    const faqContent = questions.map(question => {
        return (
            <Item
                key={question.id}
                id={question.id}
                question={question.question}
                answer={question.answer}
                active={question.active}
                handleClick={selectQ}
            />
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="logo" />
                    </div>
                    <ul className={styles.menu}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Courses</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>

                    <div className={styles.btns}>
                        <Link to="/login" className={styles.signInBtn}>Sign-In</Link>
                        <Link to="/register" className="btn">Sign-Up</Link>
                    </div>

                    <button onClick={openMenu} className={styles.menuBtn}>
                        <MdMenu size={24} />
                    </button>

                    {isOpen ? <MobileNav handleClose={closeMenu} /> : null}
                </nav>
                <div className={styles.hero}>
                    <div className={styles.left}>
                        <h1>Learn Smarter, Anywhere, Anytime</h1>
                        <Link to="/login" className='btn'>Start Learning</Link>
                    </div>
                    <div className={styles.right}>
                        <img src={Cover} alt='video icon' />
                    </div>
                </div>
            </div>
            <div className={styles.features}>
                <h2 className={styles.subHeading}>What we Provide</h2>
                <div className={styles.cards}>
                    <div className={styles.top}>
                        <div>
                            <h3 className={styles.smallHeading}>Smart Learning Mood Selection</h3>
                            <p>Smart learning mood selection Auto-detects low bandwidth and
                                loads lighter content-no need to worry about unstable connection.</p>
                        </div>
                        <div className={styles.featureIcon}>
                            <img src={Idea} />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.card}>

                            <h3 className={styles.smallHeading}>Offline Bundle Feature</h3>
                            <p>The offline bundle feature in a learning app allows users to download content for offline access, enabling learning anywhere, anytime without internet connectivity.</p>
                            <div className={styles.featureIcon}>

                                <img src={Wifi} />
                            </div>

                        </div>
                        <div className={styles.card}>

                            <h3 className={styles.smallHeading}>XP and Rewards</h3>
                            <p>XP and rewards in a learning app motivate users through gamification, boosting engagement and encouraging continued learning with points, badges, and incentives.</p>
                            <div className={styles.featureIcon}>

                                <img src={Star} />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.cta}>
                <h2 className={styles.subHeading}>Build Personalized Student Experience</h2>

                <div>
                    <div>
                        <img src={Laptop} alt="laptop" />
                    </div>
                    <div className={styles.texts}>
                        <p>Experience learning that’s tailored to you. Our app adapts to your strengths, weaknesses, and learning style to help you succeed.</p>
                        <button>
                            <img src={Hand} alt="rating image" />
                        </button>
                    </div>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <h1>3.2/5</h1>
                        <img src={Tiny} alt="tiny logo" />
                    </div>

                    <div className={styles.stat}>
                        <h1>+100</h1>
                        <p>Students taught</p>
                    </div>

                    <div className={styles.stat}>
                        <h1>+250</h1>
                        <p>Hours taught</p>
                    </div>
                </div>
            </div>

            <div id='faq' className={styles.faq}>
                <h2 className={styles.subHeading}>Frequently Asked Questions</h2>

                <div className={styles.accordion}>
                    {faqContent}
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={Logo} />
                    </div>
                    <p>Learn Smarter, Anywhere Anytime: Expert instructors, Interactive courses and personalized learning for all.</p>
                    <div className={styles.smIcons}>
                        <SiInstagram />
                        <CiLinkedin size={24} />
                        <CiTwitter size={24} />
                    </div>
                </div>

                <div className={styles.right}>
                    <FooterCol
                        heading="Company"
                        options={["Contact us", "About us", "Pricing"]}
                    />
                    <FooterCol
                        heading="Account"
                        options={["Pricing policy", "Terms & conditions", "Help center"]}
                    />
                    <FooterCol
                        heading="Contact"
                        options={["info@learnflex.con", "+234 8100005000"]}
                    />
                </div>
            </div>
        </div>
    )
}
