import React from 'react'
import { navMenu } from '../utilites/constant'
const Sidebar = () => {
  return (
    <nav>
        <ul className=' bg-[#1113] flex flex-col gap-1 backdrop-blur-lg items-start px-8 py-4 rounded-lg w-full text-white'>
    {navMenu.map(nav=>(
        <li key={nav.id} className=' text-[0.9rem] p-1 px-2  duration-500 nav  hover:text-[#0395c6]'>
            <a href={`#${nav.link}`}>{nav.title}</a>
        </li>
    ))}
</ul>
    </nav>
  )
}

export default Sidebar
