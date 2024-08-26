// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
   <div className='bg-black  md:p-[4rem] p-4 w-full'>
     <div className="bg-marine text-white w-full  border-2 rounded-xl container py-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">The Coding Journey</h2>
          <p className="text-sm">brahmareddy8242@gmail.com</p>
          <p className="text-sm">© 2024 The Coding Journey</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.1v11.44zM5.34 7.66c-1.15 0-1.9-.79-1.9-1.78C3.44 4.81 4.18 4 5.38 4s1.9.79 1.9 1.88c0 .99-.74 1.78-1.9 1.78zM20.5 20.45h-3.56v-5.88c0-1.5-.54-2.52-1.89-2.52-1.03 0-1.64.69-1.9 1.36-.1.24-.12.58-.12.91v6.13H9.47s.04-9.94 0-11h3.56v1.56c.47-.72 1.31-1.75 3.2-1.75 2.34 0 4.1 1.52 4.1 4.79v6.39z" />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.22.42.56.22.96.49 1.38.91.42.42.7.83.91 1.38.17.41.37 1.05.42 2.22.07 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.22-.22.56-.49.96-.91 1.38-.42.42-.83.7-1.38.91-.41.17-1.05.37-2.22.42-1.27.07-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.22-.42-.56-.22-.96-.49-1.38-.91-.42-.42-.7-.83-.91-1.38-.17-.41-.37-1.05-.42-2.22-.07-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.05-1.17.25-1.8.42-2.22.22-.56.49-.96.91-1.38.42-.42.83-.7 1.38-.91.41-.17 1.05-.37 2.22-.42 1.27-.07 1.65-.07 4.85-.07zm0-2.16c-3.26 0-3.67 0-4.95.07-1.29.06-2.17.27-2.94.57-.8.32-1.47.73-2.12 1.38-.65.65-1.06 1.32-1.38 2.12-.3.77-.51 1.65-.57 2.94-.07 1.28-.07 1.69-.07 4.95s0 3.67.07 4.95c.06 1.29.27 2.17.57 2.94.32.8.73 1.47 1.38 2.12.65.65 1.32 1.06 2.12 1.38.77.3 1.65.51 2.94.57 1.28.07 1.69.07 4.95.07s3.67 0 4.95-.07c1.29-.06 2.17-.27 2.94-.57.8-.32 1.47-.73 2.12-1.38.65-.65 1.06-1.32 1.38-2.12.3-.77.51-1.65.57-2.94.07-1.28.07-1.69.07-4.95s0-3.67-.07-4.95c-.06-1.29-.27-2.17-.57-2.94-.32-.8-.73-1.47-1.38-2.12-.65-.65-1.32-1.06-2.12-1.38-.77-.3-1.65-.51-2.94-.57-1.28-.07-1.69-.07-4.95-.07zM12 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.4-11.74c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.64 1.43-1.43 1.43z" />
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.91 4.28 10.78 9.87 11.81v-8.36H7.1v-3.44h2.77V9.62c0-2.74 1.63-4.26 4.13-4.26 1.2 0 2.46.21 2.46.21v2.7h-1.39c-1.38 0-1.82.85-1.82 1.73v2.04h3.06l-.49 3.44h-2.57v8.36C19.72 22.78 24 17.91 24 12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
