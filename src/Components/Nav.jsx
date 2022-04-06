import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Nav() {
  const [menu, setMenu] = useState(false)

  //Framer Motion Animations Variants
  const lineAnimation = {
    initial: {
      scale: 0,
      x: 50,
    },
    animate: {
      scale: 1,
      transition: { duration: 1, delay: 2 },
    },
  }

  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{
        y: 0,
        transition: { duration: 1, delay: 1 },
      }}
      className='fixed top-2 z-[20] w-full md:top-0 lg:mt-10 lg:ml-14'
    >
      {/* Mobile Navigation bar */}
      <ul className='flex items-center justify-between font-BarlowCondensed'>
        <li>
          <Link to='./'>
            <img
              className='ml-5 mt-5 h-[40px] min-w-[40px] cursor-pointer rounded-full bg-primary-white sm:h-auto sm:w-auto lg:ml-0 lg:mt-0'
              src='../shared/logo.svg'
            />
          </Link>
        </li>
        <motion.hr
          variants={lineAnimation}
          initial='initial'
          animate='animate'
          className='z-[20] ml-10 hidden w-[473px] max-w-[473px] border-[rgba(255,255,255,0.4)] lg:block'
        />
        {!menu ? (
          <div className='cursor-pointer' onClick={() => setMenu(true)}>
            <img
              src='../shared/icon-hamburger.svg'
              className='mr-5 mt-5 block sm:hidden'
              alt=''
            />
          </div>
        ) : (
          <>
            <img
              onClick={() => setMenu(false)}
              className='z-[2] mr-5 mt-5 block cursor-pointer sm:hidden'
              src='../shared/icon-close.svg'
              alt=''
            />
            <div className='fixed bottom-0  right-0 h-full w-[254px] bg-[rgba(255,255,255,0.04)] backdrop-blur-[81px] sm:hidden'>
              <div className='absolute top-48 mx-20 flex flex-col gap-[32px] '>
                <Link to='/' onClick={() => setMenu(false)}>
                  <span className='z-[3] mr-3 font-bold'>00</span>
                  Home
                </Link>
                <Link to='/destination' onClick={() => setMenu(false)}>
                  <span className='z-[3] mr-3 font-bold'>01</span>
                  Destination
                </Link>
                <Link to='/crew' onClick={() => setMenu(false)}>
                  <span className='z-[3] mr-3 font-bold'>02</span>Crew
                </Link>
                <Link to='/technology' onClick={() => setMenu(false)}>
                  <span className='z-[3] mr-3 font-bold'>03</span>
                  Technology
                </Link>
              </div>
            </div>
          </>
        )}
        {/* Tablets & Desktop Navigation bar */}
        <div className='hidden gap-9 bg-[rgba(255,255,255,0.04)] py-10 px-12 uppercase leading-[19.2px] tracking-[2.7px] backdrop-blur-[81px] sm:flex lg:flex-1 lg:gap-12 lg:py-12 lg:px-32'>
          <NavLink className='nav-hover' to='/'>
            <span className='mr-3 hidden font-bold lg:inline '>00</span>
            Home
          </NavLink>
          <NavLink className='nav-hover' to='/destination'>
            <span className='mr-3 hidden font-bold lg:inline '>01</span>
            Destination
          </NavLink>
          <NavLink className='nav-hover' to='/crew'>
            <span className='mr-3 hidden font-bold lg:inline '>02</span>
            Crew
          </NavLink>
          <NavLink className='nav-hover' to='/technology'>
            <span className='mr-3 hidden font-bold lg:inline '>03</span>
            Technology
          </NavLink>
        </div>
      </ul>
    </motion.nav>
  )
}

export default Nav
