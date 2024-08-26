import React from 'react'
import { projects } from '../utilites/constant'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const container = {
  hidden: { x: '100%' },
  show: {
    x: 0,
    transition: {
      duration:2
    }
  }
}
const Projects = () => {
  return (
   <section id='projects' className='md:h-[100vh] h-full   overflow-hidden  gap-20  flex flex-col  py-8 items-center bg-gradient-to-t from-[#16166B]  to-blacky '>
      <h2 className='text-5xl  font-bold text-gray-400 font-sans'>Projects</h2>
      <motion.div 
          variants={container}
          whileInView='show'
          initial='hidden'
          viewport={{threshold: 0.5}}
          className='grid grid-cols-auto gap-14 px-8 md:px-0 text-white '>
        {projects.map(project=>(
            <ProjectCard {...project}  key={project.id}/>
        ))}
      </motion.div>
   </section>
  )
}

export default Projects
