
import './App.css'
import Button from './components/Button'
import Layout from './components/Layout'
import Hero from './pages/hero'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/profile'


function App() {

  return (
    <>
    <Hero />
    {/* <Layout /> */}
    <SignUp />
    <Login />
    <Profile />
    </>
  )
}

export default App
