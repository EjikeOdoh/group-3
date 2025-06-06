
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
import Quizlist from './pages/Quizlist'
import Input from './components/Input'

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
      <Quicksurvey />
      <Result />
      <Modal />
      <Quizzes />
      <Quizlist />
      <Input />
      

    </>
  )
}

export default App
