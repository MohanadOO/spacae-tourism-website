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
      className='bg-red-900'
    >
      <img
        src='../crew/background-crew-desktop.jpg'
        className='bg-cover h-full  sm:h-screen w-screen hidden lg:block'
      />
      <img
        src='../crew/background-crew-tablet.jpg'
        className='bg-cover h-screen w-screen  sm:block lg:hidden hidden'
      />
      <img
        src='../crew/background-crew-mobile.jpg'
        className='bg-cover min-h-screen h-full w-screen   block sm:hidden'
      />
      <motion.img
        variants={crewImageAnimation}
        initial='initial'
        animate='animate'
        className='bg-cover absolute z-[0] bottom-0  lg:right-[137px] max-w-[300px]  lg:max-w-full  right-[200px] hidden sm:block'
        src={`../crew/image-${crewName || props.person}.png`}
      />
      <div className='absolute  sm:top-[150px] top-[100px] lg:top-[212px] left-0 lg:left-[166px] sm:w-screen lg:w-auto md:min-w-screen '>
        <h5 className='text-primary-white uppercase text-[16px] sm:text-[20px] lg:text-[28px] sm:ml-8 sm:mb-[50px] mb-[32px] text-center sm:text-left '>
          <span className=' opacity-25'>02</span> Meet Your Crew
        </h5>
        <div className=' px-5 mt-0 flex flex-col items-center lg:items-start text-center lg:text-left  w-full '>
          <motion.img
            variants={crewImageAnimation}
            initial='initial'
            animate='animate'
            className='bg-cover z-[0] top-100  lg:right-[137px] max-w-[220px]  lg:max-w-full right-[200px] block sm:hidden'
            src={`../crew/image-${crewName || props.person}.png`}
          />
          <hr className='w-full border-primary-white block sm:hidden' />
          <ul className='flex relative uppercase lg:gap-[35px] gap-[16px] lg:mt-[90px] mt-[40px] text-primary-white sm:hidden z-[3]'>
            <NavLink
              to='./douglas-hurley'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.5)]' +
                (isActive ? '  bg-white' : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
            <NavLink
              to='./mark-shuttleworth'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] rounded-full  cursor-pointer hover:bg-[rgba(255,255,255,0.5)]' +
                (crewName == undefined || isActive
                  ? ' bg-white'
                  : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
            <NavLink
              to='./victor-glover'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] rounded-full  cursor-pointer hover:bg-[rgba(255,255,255,0.5)]' +
                (isActive ? '  bg-white' : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
            <NavLink
              to='./anousheh-ansari'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] rounded-full  cursor-pointer hover:bg-[rgba(255,255,255,0.5)]' +
                (isActive ? '  bg-white' : ' bg-[rgba(255,255,255,0.3)]')
              }
            ></NavLink>
          </ul>
          <h4 className='text-base sm:text-2xl lg:text-4xl uppercase opacity-50 lg:mt-[130px] mt-[60px] sm:mb-5'>
            {crewMember[0].role}
          </h4>
          <motion.h3
            variants={crewNameAnimation}
            initial='initial'
            animate='animate'
            className='uppercase lg:mt-9 lg:mb-5 mt-2 mb-4 text-2xl sm:text-[40px] lg:text-[56px] lg:leading-10 '
          >
            {crewMember[0].name}
          </motion.h3>
          <p className='text-primary-white  sm:px-0 max-w-[444px] text-[15px] sm:text-[16px] lg:text-[18px] lg:leading-9 lg:mt-7 '>
            {crewMember[0].bio}
          </p>
          <ul className='sm:flex  relative uppercase lg:gap-[35px] gap-[16px] lg:mt-[90px] mt-[40px] text-primary-white hidden z-[3]'>
            <NavLink
              to='./douglas-hurley'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] hover:bg-[rgba(255,255,255,0.5)] rounded-full cursor-pointer' +
                (crewName === undefined || isActive
                  ? ' bg-white'
                  : ' bg-[rgba(255,255,255,0.2)]')
              }
            ></NavLink>
            <NavLink
              to='./mark-shuttleworth'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] hover:bg-[rgba(255,255,255,0.5)] rounded-full  cursor-pointer' +
                (isActive ? ' bg-white' : ' bg-[rgba(255,255,255,0.2)]')
              }
            ></NavLink>
            <NavLink
              to='./victor-glover'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] hover:bg-[rgba(255,255,255,0.5)] rounded-full  cursor-pointer' +
                (isActive ? ' bg-white' : ' bg-[rgba(255,255,255,0.2)]')
              }
            ></NavLink>
            <NavLink
              to='./anousheh-ansari'
              className={({ isActive }) =>
                'lg:w-4 lg:h-4 w-[10px] h-[10px] hover:bg-[rgba(255,255,255,0.5)] rounded-full  cursor-pointer' +
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
