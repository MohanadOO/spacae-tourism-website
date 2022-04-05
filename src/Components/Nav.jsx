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
      className='lg:mt-10 lg:ml-14 top-2 md:top-0 w-full fixed z-[20]'
    >
      <ul className='flex items-center font-BarlowCondensed lg:w-screen justify-between'>
        <li>
          <Link to='./'>
            <img
              className='bg-primary-white rounded-full ml-5 mt-5 lg:ml-0  lg:mt-0 min-w-[40px] sm:w-auto h-[40px] sm:h-auto cursor-pointer'
              src='../shared/logo.svg'
            />
          </Link>
        </li>
        <motion.hr
          variants={lineAnimation}
          initial='initial'
          animate='animate'
          className='border-[rgba(255,255,255,0.4)] w-[473px] max-w-[473px] ml-10 lg:block hidden z-[20]'
        />
        {!menu ? (
          <div className='cursor-pointer' onClick={() => setMenu(true)}>
            <img
              src='../shared/icon-hamburger.svg'
              className='block mr-5 mt-5 sm:hidden'
              alt=''
            />
          </div>
        ) : (
          <>
            <img
              onClick={() => setMenu(false)}
              className='block mr-5 mt-5 sm:hidden cursor-pointer z-[2]'
              src='../shared/icon-close.svg'
              alt=''
            />
            <div className='fixed bottom-0  sm:hidden backdrop-blur-[81px] w-[254px] h-full bg-[rgba(255,255,255,0.04)] right-0'>
              <div className='flex flex-col gap-[32px] mx-20 absolute top-48 '>
                <Link to='/' onClick={() => setMenu(false)}>
                  <span className='mr-3 font-bold z-[3]'>00</span>
                  Home
                </Link>
                <Link to='/destination' onClick={() => setMenu(false)}>
                  <span className='mr-3 font-bold z-[3]'>01</span>
                  Destination
                </Link>
                <Link to='/crew' onClick={() => setMenu(false)}>
                  <span className='mr-3 font-bold z-[3]'>02</span>Crew
                </Link>
                <Link to='/technology' onClick={() => setMenu(false)}>
                  <span className='mr-3 font-bold z-[3]'>03</span>
                  Technology
                </Link>
              </div>
            </div>
          </>
        )}
        {/* Tablets & Desktop Navigation bar */}
        <div className='sm:flex hidden relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[81px] lg:py-12 py-10 lg:px-32 px-12 lg:gap-12 gap-9 ml-auto lg:flex-1 tracking-[2.7px] leading-[19.2px] uppercase'>
          <NavLink className='nav-hover' to='/'>
            <span className='mr-3 font-bold lg:inline hidden '>00</span>
            Home
          </NavLink>
          <NavLink className='nav-hover' to='/destination'>
            <span className='mr-3 font-bold lg:inline hidden '>01</span>
            Destination
          </NavLink>
          <NavLink className='nav-hover' to='/crew'>
            <span className='mr-3 font-bold lg:inline hidden '>02</span>
            Crew
          </NavLink>
          <NavLink className='nav-hover' to='/technology'>
            <span className='mr-3 font-bold lg:inline hidden '>03</span>
            Technology
          </NavLink>
        </div>
      </ul>
    </motion.nav>
  )
}

export default Nav
