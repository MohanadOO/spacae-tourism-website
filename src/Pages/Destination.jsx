import React from 'react'
import { useParams, Link } from 'react-router-dom'
import dataJSON from './data.json'

function Destination(props) {
  const { destinations } = dataJSON
  let { place } = useParams()

  let planet = destinations.filter((planet) => {
    return planet.name.toLowerCase() === place
  })

  if (planet.length === 0) {
    planet = destinations
  }

  return (
    <>
      <img
        src='../destination/background-destination-desktop.jpg'
        className='bg-cover h-screen w-screen absolute overflow-hidden top-0 hidden md:block'
      />
      <img
        src='../destination/background-destination-tablet.jpg'
        className='bg-cover w-screen absolute overflow-hidden top-0 md:hidden sm:block hidden'
      />
      <img
        src='../destination/background-destination-mobile.jpg'
        className='bg-cover h-full w-screen  block sm:hidden'
      />
      <div className='absolute sm:top-[150px] top-[100px] md:top-[212px] left-0 md:left-[166px]'>
        <h5 className='text-primary-white uppercase text-[16px] sm:text-[20px] md:text-[28px] sm:ml-8 sm:mb-[50px] mb-[32px] text-center sm:text-left '>
          <span className=' opacity-25'>01</span> Pick Your Destination
        </h5>
        <div className='md:mt-[64px] px-[24px] sm:px-[0] flex flex-col md:flex-row 2xl:gap-[400px] md:gap-[187px] gap-0 items-center text-center md:text-left w-screen md:w-full '>
          <div className='sm:max-w-[300px] sm:min-h-[300px]  max-w-[170px] min-h-[100px] md:max-w-full md:min-h-full'>
            <img src={`../destination/image-${place || props.place}.png`} />
          </div>
          <div className='md:max-w-[445px] md:min-h-[472px] max-w-[573px] min-h-[300px] mt-7 sm:mt-14 md:mt-0 '>
            <ul className='flex relative uppercase gap-[35px] justify-center md:justify-start text-primary-white sm:text-[16px] text-[14px] '>
              <Link
                activeClassName='active'
                to='./moon'
                className='cursor-pointer hover:text-white'
              >
                Moon
              </Link>
              <Link
                activeClassName='active'
                to='./mars'
                className='cursor-pointer hover:text-white'
              >
                Mars
              </Link>
              <Link
                activeClassName='active'
                to='./europa'
                className='cursor-pointer hover:text-white'
              >
                Europa
              </Link>
              <Link
                activeClassName='active'
                to='./titan'
                className='cursor-pointer hover:text-white'
              >
                Titan
              </Link>
            </ul>
            <h2 className='uppercase  sm:mt-9 sm:mb-4 text-[56px] sm:text-[80px] md:text-[100px]'>
              {place || props.place}
            </h2>
            <p className='text-primary-white leading-[25px] sm:leading-[28px] md:leading-[38px] text-[14px] sm:text-[16px] md:text-[18px]'>
              {planet[0].description}
            </p>
            <hr className='border-[#383B4B] mb-6 mt-14' />
            <div className='flex sm:flex-row flex-col justify-center items-center uppercase md:justify-start sm:gap-[79px] gap-[32px]'>
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
    </>
  )
}

export default Destination
