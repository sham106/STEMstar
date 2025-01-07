import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about_right">
            <h3>ABOUT   STEMstars</h3>
            <h2>Naturing Tomorrows Leaders and Innovators Today</h2>
            <p>At STEMStars, we are dedicated to bridging the gap in STEM 
                education for underserved communities in Kenya.</p> 
                <p>Our mission is to empower young learners with the 
                skills and confidence to solve real-world problems 
                through hands-on learning in robotics, coding, and 
                other STEM fields.</p>
                <p>Founded on the belief that every child deserves the 
                opportunity 
                to shine, regardless of their background, STEMStars 
                is committed to nurturing curiosity, creativity, and
                 innovation in students who may not otherwise have 
                 access to quality STEM resources.</p>
        </div>
    </div>
  )
}

export default About