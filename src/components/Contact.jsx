import React from "react";
import {motion} from 'framer-motion'

const Contact = () => {
  return (
   <section id="contact" className=" h-[100vh] flex justify-between items-center gap-8 bg-gradient-to-b from-[#16166B] to-black py-10 md:flex-row flex-col px-2">
         <motion.div   whileInView={{ opacity: 1,scale:1 }}
                initial={{ opacity: 0,scale:0 }}
                transition={{ duration: 1.5 }}
                viewport={{
                    threshold: 0.5,
                }}
         className="md:max-w-md w-full  relative flex-1 overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 ">
        <h2 className="text-2xl font-bold text-white mb-6">
        Get in Touch
      </h2>

      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="email"
            id="email"
            type="email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="bio"
          >
            Message
          </label>
          <textarea
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            rows={3}
            name="bio"
            id="bio"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gradient-to-br from-slate-600  to-blue-800 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
            type="submit"
          >
            Send Email
          </button>
        </div>
      </form>
    </motion.div>
    <motion.figure className="w-1/3 hidden md:block" 
        animate={{y:[-50,50],x:[0,50]}}
        transition={{
            duration:4,
            repeat:Infinity,
            repeatType:"mirror"
        }}
    >
        <img  className='w-1/2 contrast-150' src="https://portfolio2-tcj.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsend-email.53f63d3c.png&w=750&q=75" alt="" />
    </motion.figure>
   </section>
  );
};

export default Contact;
