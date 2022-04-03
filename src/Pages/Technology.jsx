import React from 'react'
import { Link, useParams } from 'react-router-dom'
import dataJSON from './data.json'

function Technology() {
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
        className='bg-cover h-screen w-screen hidden md:block'
      />
      <img
        src='../technology/background-technology-tablet.jpg'
        className='bg-cover  min-h-screen w-screen sm:block md:hidden hidden'
      />
      <img
        src='../technology/background-technology-mobile.jpg'
        className='bg-cover min-h-screen  w-screen block sm:hidden'
      />
      <div className='absolute top-[100px] sm:top-[150px] md:top-[212px] left-0 md:left-[166px] z-[3]'>
        <h5 className='text-primary-white uppercase text-[16px] sm:text-[20px] md:text-[28px] sm:ml-8 sm:mb-[50px] mb-[32px] text-center sm:text-left '>
          <span className=' opacity-25'>03</span> Space Launch 101
        </h5>
        <div className='flex flex-col md:flex-row  mt-[50px] md:gap-[80px] gap-10 items-center md:text-left text-center '>
          <div className='block md:hidden w-full '>
            <img
              src={`../technology/image-${
                launch || 'launch-vehicle'
              }-landscape.jpg`}
              alt=''
            />
          </div>
          <div className='flex md:flex-col flex-row md:gap-8 gap-4'>
            <Link
              to='./launch-vehicle'
              className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-white text-primary-black rounded-full flex items-center justify-center text-3xl'
            >
              1
            </Link>
            <Link
              className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-white text-primary-black rounded-full flex items-center justify-center text-3xl'
              to='./spaceport'
            >
              2
            </Link>
            <Link
              className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-white text-primary-black rounded-full flex items-center justify-center text-3xl'
              to='./space-capsule'
            >
              3
            </Link>
          </div>
          <div className='max-w-[470px]'>
            <p className='text-primary-white font-BarlowCondensed text-[14px] sm:text-[15px] md:text-base  tracking-[2.7px] '>
              THE TERMINOLOGY…
            </p>
            <h3 className='uppercase mt-2 sm:mt-10 text-2xl sm:text-[40px] md:text-[56px] mb-5 md:leading-[64px]'>
              {device[0].name}
            </h3>
            <p className='text-primary-white text-[14px] sm:text-base md:text-[18px] sm:leading-[32px] px-[24px] sm:px-0'>
              {device[0].description}
            </p>
          </div>
          <div className='ml-14 2xl:ml-32 hidden md:block'>
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
