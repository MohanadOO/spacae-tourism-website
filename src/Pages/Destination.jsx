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
        className='bg-cover w-full  h-screen scale-110  max-w-screen min-h-screen absolute overflow-hidden top-0 hidden lg:block'
      />
      <img
        src='../destination/background-destination-tablet.jpg'
        className='bg-cover  w-screen absolute overflow-hidden top-0 lg:hidden sm:block hidden'
      />
      <img
        src='../destination/background-destination-mobile.jpg'
        className='bg-cover h-screen w-screen scale-110 block sm:hidden'
      />
      <div className='absolute sm:top-[150px] top-[100px] lg:top-[212px] left-0 lg:left-[166px]'>
        <h5 className='text-primary-white uppercase text-[16px] sm:text-[20px] lg:text-[28px] sm:ml-8 sm:mb-[50px] mb-[32px] text-center sm:text-left '>
          <span className=' opacity-25'>01</span> Pick Your Destination
        </h5>
        <div className='lg:mt-[64px] px-[24px] sm:px-[0] flex flex-col lg:flex-row 2xl:gap-[400px] lg:gap-[187px] gap-0 items-center text-center lg:text-left w-screen lg:w-full '>
          <div className='sm:max-w-[300px] sm:min-h-[300px]  max-w-[170px] min-h-[100px] lg:max-w-full lg:min-h-full'>
            <motion.img
              variants={rotateImageAnimation}
              initial='initial'
              animate='animate'
              src={`../destination/image-${place || props.place}.png`}
            />
          </div>
          <div className='lg:max-w-[445px] lg:min-h-[472px] max-w-[573px] min-h-[300px] mt-7 sm:mt-14 lg:mt-0 '>
            <ul className='flex relative uppercase gap-[35px] justify-center lg:justify-start text-primary-white sm:text-[16px] text-[14px] '>
              <NavLink
                to='./moon'
                className={({ isActive }) =>
                  'cursor-pointer hover:text-white tabs-hover' +
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
                  'cursor-pointer hover:text-white tabs-hover' +
                  (isActive ? ' tabs-active text-white' : '')
                }
              >
                Mars
              </NavLink>
              <NavLink
                to='./europa'
                className={({ isActive }) =>
                  'cursor-pointer hover:text-white tabs-hover' +
                  (isActive ? ' tabs-active text-white' : '')
                }
              >
                Europa
              </NavLink>
              <NavLink
                to='./titan'
                className={({ isActive }) =>
                  'cursor-pointer hover:text-white tabs-hover' +
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
              className='uppercase  sm:mt-9 sm:mb-4 text-[56px] sm:text-[80px] lg:text-[100px]'
            >
              {place || props.place}
            </motion.h2>
            <motion.p
              variants={planetTextAnimation}
              initial='initial'
              animate='animate'
              className='text-primary-white leading-[25px] sm:leading-[28px] lg:leading-[38px] text-[14px] sm:text-[16px] lg:text-[18px]'
            >
              {planet[0].description}
            </motion.p>
            <hr className='border-[#383B4B] mb-6 mt-14' />
            <div className='flex sm:flex-row flex-col justify-center items-center uppercase lg:justify-start sm:gap-[79px] gap-[32px]'>
              <div>
                <p className='text-primary-white text-[14px] text-base'>
                  Avg. distance
                </p>
                <h4 className='w-52 text-2xl'>{planet[0].distance}</h4>
              </div>
              <div>
                <p className='text-primary-white text-[14px]'>
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
