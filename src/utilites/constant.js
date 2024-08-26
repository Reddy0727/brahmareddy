import youtube from '../assets/youtube.avif'
import bank from '../assets/bank.avif'
import restaurent from '../assets/restaurent.avif'
import  Img1 from '../assets/html5.svg'
import Img2 from '../assets/css3.svg'
import Img3 from '../assets/javascript.svg'
import Img4 from '../assets/react_!.svg'
import Img5 from '../assets/tailwin.svg'

export const navMenu=[
    {
        id:1,
        title:'Home',
        link:'hero'
    },
    {
        id:2,
        title:'Contact',
        link:'contact'
    },
    {
        id:3,
        title:'Projects',
        link:'projects'
    },
    {
        id:4,
        title:'Services',
        link:'services'
    }
]

export const projects =[
    {
        id:1,
        title:'Project 1',
        image:bank,
        description:` work on a comprehensive and secure banking website, 
        This project involved developing a fully responsive and interactive web application`
    },
    {
        id:2,
        title:'Project 2',
        image:youtube,
        description:`I developed a YouTube clone, a video-sharing platform that replicates the core functionalities of YouTube.`
    },
    {
        id:3,
        title:'Project 3',
        image:restaurent,
        description:`
        design of popular restaurant platforms. 
        This project aimed to create an engaging and user-friendly web application`
    }
]

export const images = [
    {image:Img1,name:'HTML'},
    {image:Img2,name:'CSS'},
    {image:Img3,name:'JavaScript'},
    {image:Img4,name:'React'},
    {image:Img5,name:'Tailwind CSS'}
]