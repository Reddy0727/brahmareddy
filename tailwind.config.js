/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blacky:'#000',
        white:'#fff',
        marine:'#2B4593'
      },
      screens:{
        md:'800px'
      },
      container:{
        center:true,
        padding:{
          sm:'1rem',
          md:'3rem',
          lg:'5rem'
        }
      },
      fontFamily:{
        satisfy:["Satisfy"]
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(12rem,1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      }
     
    },
  },
  plugins: [],
}