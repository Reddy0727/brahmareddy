import React, { useState } from 'react'
import { navMenu } from '../utilites/constant'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from './Sidebar';
import { AnimatePresence,motion } from 'framer-motion';
const Header = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <header className='md:bg-[#7772] text-white py-3 md:backdrop-blur-md z-20 container fixed'>
        <nav className='flex justify-end items-center container px-6 md:px-0'>
            <ul className='md:flex gap-6 justify-center items-center hidden'>
                {navMenu.map(nav=>(
                    <li key={nav.id} className=' text-[0.9rem] p-1 px-2  duration-500 nav hover:font-semibold hover:text-[#0395c6]'>
                        <a href={`#${nav.link}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className='md:hidden flex cursor-pointer' onClick={()=>setToggle(!toggle)}>
                {!toggle ? <MenuIcon /> : <CloseIcon />}
            </div>
            <div className='md:hidden block absolute bottom-[-3rem]  md:right-0  right-4 h-full md:w-1/3 w-3/4 z-20'>
              <AnimatePresence>
                    {toggle &&  (
                        <motion.div
                             initial={{ scaleY:0 }}
                             animate={{ scaleY:1 }}
                             exit={{ scaleY: 0 }}
                             transition={{
                                duration:0.5
                              }}
                        >
                            <Sidebar />
                        </motion.div>
                    )}
              </AnimatePresence>
            </div>
        </nav>
    </header>
  )
}

export default Header
