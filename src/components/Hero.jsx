import React from 'react'
import Img from '../assets/profile.png'
import Button from './Button'
import {motion} from 'framer-motion'
import { duration } from '@mui/material'
const Hero = () => {
  return (
    <section id='hero' className='flex md:justify-around justify-center items-center container md:flex-row flex-col h-full text-white'>
      <motion.div 
        className='relative z-[4] font-mono flex-[3] pt-10 md:pt-0'
        initial={{x:'-100%'}}
        animate={{x:0}}
        transition={{
          duration:1,
          staggerChildren:{
            duration:0.5
          }
        }}
      >
         <p className='md:text-[2rem] text-[1.1rem] '>Hello, I'm</p>
         <h2 className='md:text-6xl text-4xl py-4 font-bold text-[#73C2FB] font-satisfy  stroke '>Brahma Reddy</h2>
         <p className='text-[1.1rem] '>Frontend Developer</p>
        <div className='mt-5 flex gap-4'>
        <Button value='Hire Me'/>
        <Button value='Download Resume'/>
        </div>
      </motion.div>
      <motion.div 
        className='flex items-end justify-center relative'
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{
          duration:1
        }}
      >
        <figure className='relative'>
           <img src="https://portfolio2-tcj.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.13170a64.png&w=640&q=75" alt="" className='absolute bottom-10 chakra w-4/5 md:w-full ' />
          <img src={Img} alt="profile"  className='bgs md:w-full w-4/5 relative bottom-0 brightness-190 contrast-125 z-10'  />
        </figure>
      </motion.div>
    </section>
  )
}

export default Hero
