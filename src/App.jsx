
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

import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  const isLogged = true

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
            </Route> :
            <Route path="/">
              <Route index element={<LandingPage />} />
            </Route>
        }

      </Routes>
    </BrowserRouter>
  )
}

export default App
