import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import dataJSON from './data.json'
import { motion } from 'framer-motion'

function Technology(props) {
  const { technology } = dataJSON
  let { launch } = useParams()
  let device = technology.filter((device) => {
    return device.name.split(' ').join('-').toLowerCase() === launch
  })

  if (device.length === 0) {
    device = technology
  }

  //Framer Motion Animations Variants
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  }

  const imageAnimation = {
    initial: {
      opacity: 0,
      scale: 1.2,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.1 },
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
        src='../technology/background-technology-desktop.jpg'
        className='hidden h-screen w-screen bg-cover lg:block'
      />
      <img
        src='../technology/background-technology-tablet.jpg'
        className='hidden  min-h-screen w-screen bg-cover sm:block lg:hidden'
      />
      <img
        src='../technology/background-technology-mobile.jpg'
        className='block h-full min-h-screen  w-full bg-cover sm:hidden'
      />
      <div className='absolute top-[100px] z-[3] sm:top-[150px] lg:top-[212px] lg:left-[166px]'>
        <h5 className='mb-[32px] text-center text-[16px] uppercase text-primary-white sm:ml-8 sm:mb-[50px] sm:text-left sm:text-[20px] lg:text-[28px] '>
          <span className=' opacity-25'>03</span> Space Launch 101
        </h5>
        <div className='mt-[50px] flex flex-col  items-center gap-10 text-center lg:flex-row lg:gap-[80px] lg:text-left '>
          <div className='block lg:hidden'>
            <motion.img
              variants={imageAnimation}
              initial='initial'
              animate='animate'
              src={`../technology/image-${
                launch || 'launch-vehicle'
              }-landscape.jpg`}
              alt=''
            />
          </div>
          <div className='flex  flex-row gap-4 lg:flex-col lg:gap-8'>
            <NavLink
              to='./launch-vehicle'
              className={({ isActive }) =>
                'flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-[rgba(255,255,255,0.2)]  text-3xl hover:border-white lg:h-[80px] lg:w-[80px]' +
                (launch == undefined || isActive
                  ? ' bg-white text-primary-black'
                  : ' bg-primary-black text-white')
              }
            >
              1
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                'flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-[rgba(255,255,255,0.2)]  text-3xl hover:border-white lg:h-[80px] lg:w-[80px]' +
                (isActive
                  ? ' bg-white text-primary-black'
                  : ' bg-primary-black text-white')
              }
              to='./spaceport'
            >
              2
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                'flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-[rgba(255,255,255,0.2)]  text-3xl hover:border-white lg:h-[80px] lg:w-[80px]' +
                (isActive
                  ? ' bg-white text-primary-black'
                  : ' bg-primary-black text-white')
              }
              to='./space-capsule'
            >
              3
            </NavLink>
          </div>
          <div className='max-w-[470px]'>
            <p className='font-BarlowCondensed text-[14px] tracking-[2.7px] text-primary-white sm:text-[15px]  lg:text-base '>
              THE TERMINOLOGY…
            </p>
            <h3 className='mt-2 mb-5 text-2xl uppercase sm:mt-10 sm:text-[40px] lg:text-[56px] lg:leading-[64px]'>
              {device[0].name}
            </h3>
            <p className='px-[24px] text-[14px] text-primary-white sm:px-0 sm:text-base sm:leading-[32px] lg:text-[18px]'>
              {device[0].description}
            </p>
          </div>
          <div className='ml-14 hidden lg:block 2xl:ml-32'>
            <motion.img
              variants={imageAnimation}
              initial='initial'
              animate='animate'
              src={`../technology/image-${
                launch || 'launch-vehicle'
              }-portrait.jpg`}
              alt=''
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Technology
