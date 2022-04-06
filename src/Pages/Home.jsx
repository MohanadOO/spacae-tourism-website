import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  //Framer Motion Animations Variants
  const pageTransition = {
    initial: { scale: 0.5 },
    animate: { scale: 1, transition: { duration: 1, delay: 0.1 } },
    exit: { y: window.innerHeight, transition: { duration: 0.2 } },
  }

  const textAnimation = {
    initial: { y: 200 },
    animate: { y: 0, transition: { duration: 2, delay: 1 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  }

  const exploreBtnAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 1 },
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
        src='./home/background-home-desktop.jpg'
        className='absolute top-0 hidden h-screen w-screen overflow-hidden bg-cover lg:block'
      />
      <img
        src='./home/background-home-tablet.jpg'
        className='absolute top-0  hidden min-h-screen w-screen overflow-hidden bg-cover sm:block lg:hidden'
      />
      <img
        src='./home/background-home-mobile.jpg'
        className='absolute top-0  block min-h-screen w-screen overflow-hidden bg-cover sm:hidden'
      />
      <div className='relative top-[120px] mx-auto flex w-[80vw] flex-col items-center justify-between text-center sm:top-[200px] lg:top-[387px] lg:ml-[165px] lg:flex-row lg:text-left'>
        <div className='min-h-[382px] max-w-[450px] overflow-hidden'>
          <motion.h5
            animate={{ x: [1000, 0], transition: { delay: 0.5, duration: 2 } }}
            className=' text-base uppercase text-primary-white sm:text-2xl'
          >
            So, you want to travel to
          </motion.h5>
          <h1 className='text-[80px] uppercase sm:text-[150px]'>Space</h1>
          <motion.p
            variants={textAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            className='font-Barlow text-[15px] text-primary-white sm:text-base lg:text-[18px] lg:leading-[32px]'
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </div>
        <motion.div
          variants={exploreBtnAnimation}
          initial='initial'
          animate='animate'
          className='mt-0 mr-0 flex h-[250px] min-w-[250px] items-center justify-center rounded-full transition-colors duration-200 ease-in 
          hover:bg-[rgba(255,255,255,0.2)] sm:h-[342px] sm:min-w-[342px] lg:mt-5 lg:mr-[165px] lg:h-[374px] lg:min-w-[374px] '
        >
          <Link
            to='./destination'
            className='z-10  flex h-[150px] 
          min-w-[150px] cursor-pointer items-center justify-center rounded-full bg-white uppercase 
          text-primary-black sm:h-[242px] sm:min-w-[242px] lg:h-[274px] lg:min-w-[274px]'
          >
            <h4 className='text-[20px] sm:text-[32px]'>Explore</h4>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
