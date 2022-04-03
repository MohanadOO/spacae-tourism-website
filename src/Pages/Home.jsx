import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <img
        src='./home/background-home-desktop.jpg'
        className='bg-cover h-screen w-screen absolute overflow-hidden top-0 hidden md:block'
      />
      <img
        src='./home/background-home-tablet.jpg'
        className='bg-cover min-h-screen  w-screen absolute overflow-hidden top-0 sm:block md:hidden hidden'
      />
      <img
        src='./home/background-home-mobile.jpg'
        className='bg-cover min-h-screen  w-screen absolute overflow-hidden top-0 block sm:hidden'
      />
      <div className='flex flex-col md:flex-row w-[80vw] relative md:top-[387px] top-[120px] sm:top-[200px] md:ml-[165px] mx-auto justify-between items-center text-center md:text-left'>
        <div className='max-w-[450px] min-h-[382px]'>
          <h5 className=' text-base sm:text-2xl text-primary-white uppercase'>
            So, you want to travel to
          </h5>
          <h1 className='uppercase text-[80px] sm:text-[150px]'>Space</h1>
          <p className='font-Barlow text-primary-white text-[15px] sm:text-base md:text-xl'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to='./destination'
          className='uppercase mt-0 md:mt-20 md:mr-[165px] mr-0  bg-white text-primary-black md:min-w-[274px] md:h-[274px] 
          sm:min-w-[242px] sm:h-[242px] min-w-[150px] h-[150px] 
          rounded-full flex items-center justify-center cursor-pointer'
        >
          <h4 className='sm:text-[32px] text-[20px]'>Explore</h4>
        </Link>
      </div>
    </>
  )
}

export default Home
