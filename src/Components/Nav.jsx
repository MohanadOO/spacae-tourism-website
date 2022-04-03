import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {
  const [menu, setMenu] = useState(false)

  return (
    <nav className='md:mt-10 md:ml-14 w-full fixed z-[5]'>
      <ul className='flex items-center font-BarlowCondensed md:w-screen justify-between'>
        <li>
          <Link to='./'>
            <img
              className='bg-primary-white rounded-full ml-10 mt-5 md:ml-0 md:mt-0 w-[40px] sm:w-auto h-[40px] sm:h-auto cursor-pointer'
              src='../shared/logo.svg'
            />
          </Link>
        </li>
        <hr className='border-primary-white w-[473px] max-w-[473px] ml-16 md:block hidden' />
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
                <Link to='/'>
                  <span className='mr-3 font-bold z-[3]'>00</span>
                  Home
                </Link>
                <Link to='/destination'>
                  <span className='mr-3 font-bold z-[3]'>01</span>
                  Destination
                </Link>
                <Link to='/crew'>
                  <span className='mr-3 font-bold z-[3]'>02</span>Crew
                </Link>
                <Link to='/technology'>
                  <span className='mr-3 font-bold z-[3]'>03</span>
                  Technology
                </Link>
              </div>
            </div>
          </>
        )}
        <div className='sm:flex hidden relative bg-[rgba(255,255,255,0.04)] backdrop-blur-[81px] md:py-12 py-10 md:px-32 px-12 md:gap-12 gap-9 ml-auto md:flex-1 tracking-[2.7px] leading-[19.2px] uppercase'>
          <NavLink to='/'>
            <span className='mr-3 font-bold md:inline hidden'>00</span>Home
          </NavLink>
          <NavLink to='/destination'>
            <span className='mr-3 font-bold md:inline hidden'>01</span>
            Destination
          </NavLink>
          <NavLink to='/crew'>
            <span className='mr-3 font-bold md:inline hidden'>02</span>Crew
          </NavLink>
          <NavLink to='/technology'>
            <span className='mr-3 font-bold md:inline hidden'>03</span>
            Technology
          </NavLink>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
