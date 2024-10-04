import React from 'react'
import './Home.css'
import Milon from '../../assets/Milon.jpg';
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
  return (
    <div className='home-container flex items-center h-screen '>
      <div className="intro text-white text-left pl-10">
        <h1 className='intro-name'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hi, I am Milon Kumar Mondol',
         // wait 1s before replacing "Mice" with "Hamsters"
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.2em', display: 'inline-block' }}
      cursor={false}
    />
        </h1>
        <h3 className='bio mt-4'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Experienced Graphic Designer with 5+ Years',
         // wait 1s before replacing "Mice" with "Hamsters"
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      cursor={false}
      
    />
        </h3>
        <p className='details-text text-left mt-6 '>     
           I am a professional graphic designer with more than 5 years of freelance experience. I specialize in logo design and have extensive experience with graphics and illustrations. I embarked on this journey in 2019 and have been creating success stories since then. I promise you quick turnaround times, unlimited revisions, excellent customer service, and 100% original designs! Our 110% satisfaction guaranteed policy reassures you that your success is our success. 
        </p>
      </div>
      <div className='profile-pic mr-8'>
        <img src={Milon} alt="" style={{"width":"160em","height":"50em"}} className='rounded-full' />
      </div>
    </div>
  )
}

export default Home