import React from 'react'
import './Home.css'
import Milon from '../../assets/Milon.jpg';
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";


const Home = () => {
  return (
    <>
      <div className='home-container md:flex justify-center items-center md:h-screen'>
        <div className='photo-container md:mr-24'>
          <img src={Milon} alt="" className='portfolio-pic' />
        </div>
        <div className="intro text-white text-left pl-10">
          <p className='personal-portfolio-text'>PERSONAL PORTFOLIO</p>
          <h1 className='portfolio-name'>MILON KUMAR <br />MONDOL</h1>
            <p>I am looking to expand my portfolio while i'm on top and while i'm young</p>
          <div className='contact-button-container text-white mt-10 flex'>
          <span className='text-2xl font-extrabold'>Reach me:</span>
          <a className='ml-6 text-3xl' href="mailto:milonmondol2057@gmail.com" target='_blank'><BiLogoGmail /></a>
          <a className='ml-6 text-3xl' href="https://wa.me/8801745116058" target="_blank"><FaWhatsapp /></a>

          <a className='ml-6 text-3xl' href="https://www.freelancer.com/u/milonmondol2057?sb=t" target='_blank'><SiFreelancer /></a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home