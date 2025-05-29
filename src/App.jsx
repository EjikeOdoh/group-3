
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


function App() {

  return (
    <>
    <Hero />
    {/* <Layout /> */}
    <SignUp />
    <Login />
    <Profile />
    <Quicksurvey />
    <Result />
    <Modal />
    <Quizzes />
    <Quiz />
    
    </>
  )
}

export default App
