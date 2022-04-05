import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Crew from '../Pages/Crew'
import Destination from '../Pages/Destination'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Technology from '../Pages/Technology'

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination place={'moon'} />}>
          <Route path=':place' />
        </Route>
        <Route path='/crew' element={<Crew person={'douglas-hurley'} />}>
          <Route path=':crewName' />
        </Route>
        <Route
          path='/technology'
          element={<Technology launch={'launch-vehicle'} />}
        >
          <Route path=':launch' />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
