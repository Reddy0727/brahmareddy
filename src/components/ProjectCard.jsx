import React from 'react'

const ProjectCard = ({image,title,description}) => {
  return (
<div class="card hover:scale-110 duration-500 cursor-pointer">
  <div class=" rounded-sm  text-white shadow-lg ">
      <img src={image} alt=""  className='h-full w-full '/>
  </div>
  <div>
    <h5 class="mb-2  text-md font-semibold font-mono text-[0.9rem] ">
     {title}
    </h5>
    <p class="max-h-[4rem] overflow-hidden text-ellipsis" >
         {description}
    </p>
  </div>
  <div >
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Live
    </button>
  </div>
</div>
  )
}

export default ProjectCard
