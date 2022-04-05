import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Components/Nav'
import AnimatedRoutes from './Components/AnimatedRoutes'

function App() {
  return (
    <div className='font-Bellefair text-white'>
      <Router>
        <Nav />
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App
