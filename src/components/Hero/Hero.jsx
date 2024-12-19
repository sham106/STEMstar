import React from 'react'
import './Hero.css'
import arrow_icon from '../../assets/arrow_icon.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
          <h1>Empowering Young Innovators Through STEM Education</h1>
          <p>STEMstars brings coding, robotics, mathematics and 
            STEM resources to students who need it the most. 
          </p>
          <button className='btn'>Get Involved <img src={arrow_icon} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero