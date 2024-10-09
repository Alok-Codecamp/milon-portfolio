import React from 'react'
import './Home.css'
import Milon from '../../assets/Milon.jpg';
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
  return (
    <>
      <div className='home-container flex justify-center items-center h-screen '>

        <div className='photo-container'>
          <img src={Milon} alt="" className='portfolio-pic' />
        </div>
        <div className="intro text-white text-left pl-10">
          <p className='personal-portfolio-text'>PERSONAL PORTFOLIO</p>
          <h1 className='portfolio-name'>MILON KUMAR <br />MONDOL</h1>
            <p>I am looking to expand my portfolio while i'm on top and while i'm young</p>
          <div className='contact-button-container text-white mt-10'>
          <span>Reach me:</span>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          </div>
        </div>

      </div>

    </>
  )
}

export default Home