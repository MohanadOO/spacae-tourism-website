import React from 'react'
import dataJSON from './data.json'
import { useParams, Link } from 'react-router-dom'

function Crew(props) {
  const { crew } = dataJSON
  let { crewName } = useParams()

  let crewMember = crew.filter((personName) => {
    return personName.name.split(' ').join('-').toLowerCase() === crewName
  })

  if (crewMember.length === 0) {
    crewMember = crew
  }
  return (
    <>
      <img
        src='../crew/background-crew-desktop.jpg'
        className='bg-cover h-full  sm:h-screen w-screen hidden md:block'
      />
      <img
        src='../crew/background-crew-tablet.jpg'
        className='bg-cover min-h-screen w-screen  sm:block md:hidden hidden'
      />
      <img
        src='../crew/background-crew-mobile.jpg'
        className='bg-cover min-h-screen  w-screen  block sm:hidden'
      />
      <img
        className='bg-cover absolute z-[1] bottom-0  md:right-[137px] max-w-[300px]  md:max-w-full  right-[200px] hidden sm:block'
        src={`../crew/image-${crewName || props.person}.png`}
      />
      <div className='absolute sm:top-[150px] top-[100px] md:top-[212px] left-0 md:left-[166px]'>
        <h5 className='text-primary-white uppercase text-[16px] sm:text-[20px] md:text-[28px] sm:ml-8 sm:mb-[50px] mb-[32px] text-center sm:text-left '>
          <span className=' opacity-25'>02</span> Meet Your Crew
        </h5>
        <div className='md:mt-[64px] px-[24px] sm:px-0 mt-0 flex flex-col  items-center md:items-start text-center md:text-left w-screen md:w-full'>
          <img
            className='bg-cover z-[1] top-100  md:right-[137px] max-w-[300px]  md:max-w-full right-[200px] block sm:hidden'
            src={`../crew/image-${crewName || props.person}.png`}
          />
          <hr className='w-full border-primary-white block sm:hidden' />
          <ul className='flex relative uppercase md:gap-[35px] gap-[16px] md:mt-[90px] mt-[40px] text-primary-white sm:hidden z-[3]'>
            <Link
              to='./douglas-hurley'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full cursor-pointer hover:text-white'
            ></Link>
            <Link
              to='./mark-shuttleworth'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full opacity-[0.17] cursor-pointer hover:text-white'
            ></Link>
            <Link
              to='./victor-glover'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full opacity-[0.17] cursor-pointer hover:text-white'
            ></Link>
            <Link
              to='./anousheh-ansari'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full opacity-[0.17] cursor-pointer hover:text-white'
            ></Link>
          </ul>
          <h4 className='text-base sm:text-2xl md:text-4xl uppercase opacity-50 md:mt-[154px] mt-[60px] sm:mb-5'>
            Commander
          </h4>
          <h3 className='uppercase md:mt-9 mt-2 mb-4 text-2xl sm:text-[40px] md:text-[56px]'>
            {crewMember[0].name}
          </h3>
          <p className='text-primary-white w-[444px] text-[15px] sm:text-[16px] md:text-[18px]'>
            {crewMember[0].bio}
          </p>
          <ul className='sm:flex relative uppercase md:gap-[35px] gap-[16px] md:mt-[90px] mt-[40px] text-primary-white hidden z-[3]'>
            <Link
              to='./douglas-hurley'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full cursor-pointer hover:text-white'
            ></Link>
            <Link
              to='./mark-shuttleworth'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full opacity-[0.17] cursor-pointer hover:text-white'
            ></Link>
            <Link
              to='./victor-glover'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full opacity-[0.17] cursor-pointer hover:text-white'
            ></Link>
            <Link
              to='./anousheh-ansari'
              className='md:w-4 md:h-4 w-[10px] h-[10px] bg-white rounded-full opacity-[0.17] cursor-pointer hover:text-white'
            ></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Crew
