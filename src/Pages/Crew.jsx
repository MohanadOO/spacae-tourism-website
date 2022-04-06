import React from 'react'
import dataJSON from './data.json'
import { useParams, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Crew(props) {
  const { crew } = dataJSON
  let { crewName } = useParams()

  let crewMember = crew.filter((personName) => {
    return personName.name.split(' ').join('-').toLowerCase() === crewName
  })

  if (crewMember.length === 0) {
    crewMember = crew
  }

  //Framer Motion Animations Variants
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  }

  const crewNameAnimation = {
    initial: {
      x: '-500',
    },
    animate: {
      x: 0,
      transition: { duration: 0.5, delay: 0.1 },
    },
  }

  const crewImageAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 2, delay: 0.1 },
    },
  }

  return (
    <motion.div
      variants={pageTransition}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <img
        src='../crew/background-crew-desktop.jpg'
        className='hidden h-full  w-screen bg-cover sm:h-screen lg:block'
      />
      <img
        src='../crew/background-crew-tablet.jpg'
        className='hidden h-screen w-screen  bg-cover sm:block lg:hidden'
      />
      <img
        src='../crew/background-crew-mobile.jpg'
        className='block h-full min-h-screen w-screen   bg-cover sm:hidden'
      />
      <motion.img
        variants={crewImageAnimation}
        initial='initial'
        animate='animate'
        className='absolute bottom-0 left-[50%] right-[50%] z-[0] hidden  max-w-[300px]  translate-x-[-50%] bg-cover sm:block  lg:left-auto  lg:right-[137px] lg:max-w-full lg:translate-x-0'
        src={`../crew/image-${crewName || props.person}.png`}
      />
      <div className='md:min-w-screen absolute top-[100px] sm:top-[150px] sm:w-screen lg:top-[212px] lg:left-[166px] lg:w-auto '>
        <h5 className='mb-[32px] text-center text-[16px] uppercase text-primary-white sm:ml-8 sm:mb-[50px] sm:text-left sm:text-[20px] lg:text-[28px] '>
          <span className=' opacity-25'>02</span> Meet Your Crew
        </h5>
        <div className=' mt-0 flex w-full flex-col items-center px-5 text-center lg:items-start  lg:text-left '>
          <motion.img
            variants={crewImageAnimation}
            initial='initial'
            animate='animate'
            className='top-100 right-[200px] z-[0]  block max-w-[220px]  bg-cover sm:hidden lg:right-[137px] lg:max-w-full'
            src={`../crew/image-${crewName || props.person}.png`}
          />
          <hr className='block w-full border-primary-white sm:hidden' />
          <ul className='relative z-[3] mt-[40px] flex gap-[16px] uppercase text-primary-white sm:hidden lg:mt-[90px] lg:gap-[35px]'>
            <NavLink
              to='./douglas-hurley'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)] lg:h-4 lg:w-4' +
                (isActive ? '  bg-white' : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
            <NavLink
              to='./mark-shuttleworth'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)]  lg:h-4 lg:w-4' +
                (crewName == undefined || isActive
                  ? ' bg-white'
                  : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
            <NavLink
              to='./victor-glover'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)]  lg:h-4 lg:w-4' +
                (isActive ? '  bg-white' : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
            <NavLink
              to='./anousheh-ansari'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)]  lg:h-4 lg:w-4' +
                (isActive ? '  bg-white' : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
          </ul>
          <h4 className='mt-[60px] text-base uppercase opacity-50 sm:mb-5 sm:text-2xl lg:mt-[130px] lg:text-4xl'>
            {crewMember[0].role}
          </h4>
          <motion.h3
            variants={crewNameAnimation}
            initial='initial'
            animate='animate'
            className='mt-2 mb-4 text-2xl uppercase sm:text-[40px] lg:mt-9 lg:mb-5 lg:text-[56px] lg:leading-10 '
          >
            {crewMember[0].name}
          </motion.h3>
          <p className='max-w-[444px]  text-[15px] text-primary-white sm:px-0 sm:text-[16px] lg:mt-7 lg:text-[18px] lg:leading-9 '>
            {crewMember[0].bio}
          </p>
          <ul className='relative  z-[3] mt-[40px] hidden gap-[16px] uppercase text-primary-white sm:flex lg:mt-[90px] lg:gap-[35px]'>
            <NavLink
              to='./douglas-hurley'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)] lg:h-4 lg:w-4' +
                (crewName === undefined || isActive
                  ? ' bg-white'
                  : ' bg-[rgba(255,255,255,0.2)]')
              }
            ></NavLink>
            <NavLink
              to='./mark-shuttleworth'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)] lg:h-4  lg:w-4' +
                (isActive ? ' bg-white' : ' bg-[rgba(255,255,255,0.2)]')
              }
            ></NavLink>
            <NavLink
              to='./victor-glover'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)] lg:h-4  lg:w-4' +
                (isActive ? ' bg-white' : ' bg-[rgba(255,255,255,0.2)]')
              }
            ></NavLink>
            <NavLink
              to='./anousheh-ansari'
              className={({ isActive }) =>
                'h-[10px] w-[10px] cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.5)] lg:h-4  lg:w-4' +
                (isActive ? ' bg-white' : ' bg-[rgba(255,255,255,0.2)]')
              }
            ></NavLink>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Crew
