
import './App.css'
import Button from './components/Button'
import Layout from './components/Layout'
import Hero from './pages/hero'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/profile'
import Quicksurvey from './pages/QuickSurvey'
import Result from './pages/Result'
import Modal from './components/Modal'
import Quizzes from './pages/Quizzes'
import Quiz from './components/Quiz'
import Landing from './pages/Landing'
import LandingPage from './pages/LandingPage'
import Info from './pages/Info'
import Notification from './pages/Notification'
import Support from './pages/Support'


function App() {

  return (
    <>
      <LandingPage />
      <Landing />
      <Hero />
      <Layout />
      <SignUp />
      <Login />
      <Profile />
      <Quicksurvey/>
      <Result />
      <Modal />
      <Quizzes />
      <Info />
      <Notification />
      <Support /> 
      

    </>
  )
}

export default App
