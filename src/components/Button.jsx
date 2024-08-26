import React from 'react'

const Button = ({value}) => {
  return (
    <button class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 md:text-[1rem] text-[0.7rem]
     text-white font-bold py-3 px-6 rounded-full  transform transition-all duration-500 ease-in-out  hover:brightness-110 ">
    {value}
  </button>
  
  )
}

export default Button
