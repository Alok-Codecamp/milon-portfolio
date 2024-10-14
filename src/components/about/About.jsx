import React from 'react';
import './About.css';
import aboutPic from "../../assets/aboutPic.jpg"




const About = () => {
  return (
    <div className='about-container flex justify-center items-center bg-slate-50 mt-16'>
      <div className='about-text pr-20'>
        <h1 className='pl-10 text-4xl mb-10'>ABOUT ME</h1>
        
        <p className='pr-20 pl-10 '>
          I am a professional graphic designer with more than 5 years of freelance experience. I specialize in logo design and have extensive experience with graphics and illustrations. I embarked on this journey in 2019 and have been creating success stories since then.
          I promise you quick turnaround times, unlimited revisions, excellent customer service, and 100% original designs! Our 110% satisfaction guaranteed policy reassures you that your success is our success.
          
          <h4 className='text-lg pt-10'>NO UPFRONT || MULTIPLE REVISIONS || WORKING 24*7 HOURS || 100% JOB SATISFACTION</h4>
        </p>
      </div>
      <div className='about-pic-container  bg-slate-800 pt-8 pb-8'>
        <img src={aboutPic} className='about-pic' alt="" />
      </div>

    </div>
  )
}

export default About