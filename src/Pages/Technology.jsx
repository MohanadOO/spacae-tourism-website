import { filterProps } from 'framer-motion'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import dataJSON from './data.json'

function Technology(props) {
  const { technology } = dataJSON
  let { launch } = useParams()
  let device = technology.filter((device) => {
    return device.name.split(' ').join('-').toLowerCase() === launch
  })

  if (device.length === 0) {
    device = technology
  }

  return (
    <>
      <img
        src='../technology/background-technology-desktop.jpg'
        className='bg-cover h-screen w-screen hidden lg:block'
      />
      <img
        src='../technology/background-technology-tablet.jpg'
        className='bg-cover  min-h-screen w-screen sm:block lg:hidden hidden'
      />
      <img
        src='../technology/background-technology-mobile.jpg'
        className='bg-cover min-h-screen  w-screen block sm:hidden'
      />
      <div className='absolute top-[100px] sm:top-[150px] lg:top-[212px] left-0 lg:left-[166px] z-[3]'>
        <h5 className='text-primary-white uppercase text-[16px] sm:text-[20px] lg:text-[28px] sm:ml-8 sm:mb-[50px] mb-[32px] text-center sm:text-left '>
          <span className=' opacity-25'>03</span> Space Launch 101
        </h5>
        <div className='flex flex-col lg:flex-row  mt-[50px] lg:gap-[80px] gap-10 items-center lg:text-left text-center '>
          <div className='block lg:hidden w-full '>
            <img
              src={`../technology/image-${
                launch || 'launch-vehicle'
              }-landscape.jpg`}
              alt=''
            />
          </div>
          <div className='flex lg:flex-col flex-row lg:gap-8 gap-4'>
            <NavLink
              to='./launch-vehicle'
              className={({ isActive }) =>
                'lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border-[1px] border-[rgba(255,255,255,0.2)] hover:border-white rounded-full  flex items-center justify-center text-3xl' +
                (launch == undefined || isActive
                  ? ' bg-white text-primary-black'
                  : 'text-white bg-primary-black')
              }
            >
              1
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                'lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border-[1px] border-[rgba(255,255,255,0.2)] hover:border-white rounded-full  flex items-center justify-center text-3xl' +
                (isActive
                  ? ' bg-white text-primary-black'
                  : 'text-white bg-primary-black')
              }
              to='./spaceport'
            >
              2
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                'lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] border-[1px] border-[rgba(255,255,255,0.2)] hover:border-white rounded-full  flex items-center justify-center text-3xl' +
                (isActive
                  ? ' bg-white text-primary-black'
                  : 'text-white bg-primary-black')
              }
              to='./space-capsule'
            >
              3
            </NavLink>
          </div>
          <div className='max-w-[470px]'>
            <p className='text-primary-white font-BarlowCondensed text-[14px] sm:text-[15px] lg:text-base  tracking-[2.7px] '>
              THE TERMINOLOGY…
            </p>
            <h3 className='uppercase mt-2 sm:mt-10 text-2xl sm:text-[40px] lg:text-[56px] mb-5 lg:leading-[64px]'>
              {device[0].name}
            </h3>
            <p className='text-primary-white text-[14px] sm:text-base lg:text-[18px] sm:leading-[32px] px-[24px] sm:px-0'>
              {device[0].description}
            </p>
          </div>
          <div className='ml-14 2xl:ml-32 hidden lg:block'>
            <img
              src={`../technology/image-${
                launch || 'launch-vehicle'
              }-portrait.jpg`}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology
