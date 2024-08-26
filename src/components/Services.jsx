import React from 'react'
import { images } from '../utilites/constant'
import { motion  } from 'framer-motion'
import { slideLeft } from '../utilites/animations'
import { Scale } from '@mui/icons-material'
import { duration } from '@mui/material'
const container = {
    hidden: { x: '-100%' },
    show: {
      x: 0,
      transition: {
        duration:2,
        staggerChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 }
  }
  
const Services = () => {
  return (
    <section id='services' className="md:h-[100vh] text-white bg-gradient-to-br from-gray-800 to-black py-10 overflow-hidden flex flex-col items-center ">
       <h3 className='md:text-4xl text-2xl font-semibold px-4 md:px-0'>
         A Portfolio of Versatile Skills
       </h3>
       <motion.div 
         variants={container}
         whileInView='show' 
         initial='hidden'
         viewport={{
            threshold: 0.5,
        }}
       
         className='grid md:grid-cols-3 grid-cols-2 gap-10 container py-10 place-content-center '
        >
          {images.map((pic,i)=>(
            <motion.figure key={i} 
                variants={item}
                
                className='flex flex-col items-center gap-6 px-4 md:px-0'
            >
                 <img src={pic.image} alt={pic.name} className='md:w-[200px] w-[150px] ' />
                 <figcaption>{pic.name}</figcaption>
            </motion.figure>
          ))}
       </motion.div>
    </section>

  )
}

export default Services
