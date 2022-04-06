import { animate, MotionConfig } from 'framer-motion'
import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import dataJSON from './data.json'
import { motion } from 'framer-motion'

function Destination(props) {
  const { destinations } = dataJSON
  let { place } = useParams()

  let planet = destinations.filter((planet) => {
    return planet.name.toLowerCase() === place
  })

  if (planet.length === 0) {
    planet = destinations
  }

  //Framer Motion Animations Variants
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  }

  const rotateImageAnimation = {
    initial: { scale: 0.8, rotate: '360deg' },
    animate: {
      scale: 1,
      rotate: '0deg',
      transition: { delay: 0.5, duration: 0.5 },
    },
  }

  const planetNameAnimation = {
    initial: {
      scale: 5.5,
    },
    animate: {
      scale: 1,
      transition: { duration: 0.5, delay: 0.1 },
    },
  }

  const planetTextAnimation = {
    initial: {
      x: '200',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1, ease: 'easeIn' },
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
        src='../destination/background-destination-desktop.jpg'
        className='max-w-screen absolute   hidden  h-screen min-h-screen w-full scale-110 overflow-hidden bg-cover lg:block'
      />
      <img
        src='../destination/background-destination-tablet.jpg'
        className='absolute  hidden w-screen overflow-hidden bg-cover sm:block lg:hidden'
      />
      <img
        src='../destination/background-destination-mobile.jpg'
        className='block h-screen w-screen scale-110 bg-cover sm:hidden'
      />
      <div className='absolute top-[100px] left-0 sm:top-[150px] lg:top-[212px] lg:left-[166px]'>
        <h5 className='mb-[32px] text-center text-[16px] uppercase text-primary-white sm:ml-8 sm:mb-[50px] sm:text-left sm:text-[20px] lg:text-[28px] '>
          <span className=' opacity-25'>01</span> Pick Your Destination
        </h5>
        <div className='flex w-screen flex-col items-center gap-0 px-[24px] text-center sm:px-[0] lg:mt-[64px] lg:w-full lg:flex-row lg:gap-[187px] lg:text-left 2xl:gap-[400px] '>
          <div className='min-h-[100px] max-w-[170px]  sm:min-h-[300px] sm:max-w-[300px] lg:min-h-full lg:max-w-full'>
            <motion.img
              variants={rotateImageAnimation}
              initial='initial'
              animate='animate'
              src={`../destination/image-${place || props.place}.png`}
            />
          </div>
          <div className='mt-7 min-h-[300px] max-w-[573px] sm:mt-14 lg:mt-0 lg:min-h-[472px] lg:max-w-[445px] '>
            <ul className='relative flex justify-center gap-[35px] text-[14px] uppercase text-primary-white sm:text-[16px] lg:justify-start '>
              <NavLink
                to='./moon'
                className={({ isActive }) =>
                  'tabs-hover cursor-pointer hover:text-white' +
                  (place === undefined || isActive
                    ? ' tabs-active text-white'
                    : ' ')
                }
              >
                Moon
              </NavLink>
              <NavLink
                to='./mars'
                className={({ isActive }) =>
                  'tabs-hover cursor-pointer hover:text-white' +
                  (isActive ? ' tabs-active text-white' : '')
                }
              >
                Mars
              </NavLink>
              <NavLink
                to='./europa'
                className={({ isActive }) =>
                  'tabs-hover cursor-pointer hover:text-white' +
                  (isActive ? ' tabs-active text-white' : '')
                }
              >
                Europa
              </NavLink>
              <NavLink
                to='./titan'
                className={({ isActive }) =>
                  'tabs-hover cursor-pointer hover:text-white' +
                  (isActive ? ' tabs-active text-white' : '')
                }
              >
                Titan
              </NavLink>
            </ul>
            <motion.h2
              variants={planetNameAnimation}
              initial='initial'
              animate='animate'
              className='text-[56px]  uppercase sm:mt-9 sm:mb-4 sm:text-[80px] lg:text-[100px]'
            >
              {place || props.place}
            </motion.h2>
            <motion.p
              variants={planetTextAnimation}
              initial='initial'
              animate='animate'
              className='text-[14px] leading-[25px] text-primary-white sm:text-[16px] sm:leading-[28px] lg:text-[18px] lg:leading-[38px]'
            >
              {planet[0].description}
            </motion.p>
            <hr className='mb-6 mt-14 border-[#383B4B]' />
            <div className='flex flex-col items-center justify-center gap-[32px] uppercase sm:flex-row sm:gap-[79px] lg:justify-start'>
              <div>
                <p className='text-[14px] text-base text-primary-white'>
                  Avg. distance
                </p>
                <h4 className='w-52 text-2xl'>{planet[0].distance}</h4>
              </div>
              <div>
                <p className='text-[14px] text-primary-white'>
                  Est. travel time
                </p>
                <h4 className='w-52 text-2xl '>{planet[0].travel}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Destination
