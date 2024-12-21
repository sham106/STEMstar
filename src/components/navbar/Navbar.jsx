import React, { useEffect, useState } from 'react'
import './navbar.css'  
import logo from '../../assets/logo1.png' 

const navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav  className={`container ${sticky ? 'dark-nav' : ''} `}>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>Robotics kit store</li>
            <li>Events</li>
            <li>Partner with us</li>
            <li><button className='btn'>Contact Us</button></li>
            <li>Testimonials</li>
        </ul>
    </nav>
  )
}

export default navbar