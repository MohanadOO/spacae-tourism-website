import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
import Crew from './Pages/Crew'
import Destination from './Pages/Destination'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import Technology from './Pages/Technology'
import Nav from './Components/Nav'

function App() {
  return (
    <div className='font-Bellefair text-white'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination place={'moon'} />}>
            <Route path=':place' element={<Destination />} />
          </Route>
          <Route path='/crew' element={<Crew person={'douglas-hurley'} />}>
            <Route path=':crewName' element={<Crew />} />
          </Route>
          <Route
            path='/technology'
            element={<Technology launch={'launch-vehicle'} />}
          >
            <Route path=':launch' />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
