
import './App.css'
import Protected from './component/Protected'
import Courses from './pages/Courses'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import Calenders from './pages/Calenders'
import Rewards from './pages/Rewards'
import Notifications from './pages/Notifications'
import Quizzes from './pages/Quizzes'
import Support from './pages/Support'
import Settings from './pages/Settings'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Quicksurvey from './pages/QuickSurvey'
import Result from './pages/Result'
import AuthWrapper, { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DownloadCenter from './pages/DownloadCenter'

function Navigation() {

  const isLogged = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        {
          isLogged ?
            <Route path="/" element={<Protected />} >
              <Route index element={<Dashboard />} />
              <Route path="courses" element={<Courses />} />
              <Route path="schedule" element={<Calenders />} />
              <Route path="rewards" element={<Rewards />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="quizzes" element={<Quizzes />} />
              <Route path="support" element={<Support />} />
              <Route path="settings" element={<Settings />} />
              <Route path="download" element={<DownloadCenter />} />
              <Route path="survey" element={<Quicksurvey />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route> :
            <Route path="/">
              <Route index element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Signup />} />
              <Route path="profile" element={<Profile />} />
              <Route path="survey" element={<Quicksurvey />} />
              <Route path="result" element={<Result />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
        }
      </Routes>
    </BrowserRouter>
  )
}

function App() {

  return (
    <AuthWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navigation />
      </LocalizationProvider>
    </AuthWrapper>

  )
}

export default App
