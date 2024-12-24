import React, { useEffect, useState } from 'react'
import './navbar.css'  
import logo from '../../assets/logo1.png' 
import menu_icon from '../../assets/menu_icon.png' 
import { Link } from 'react-scroll'

const navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [moblieMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    moblieMenu ? setMobileMenu(false) : setMobileMenu(true)
  } 

  return (
    <nav  className={`container ${sticky ? 'dark-nav' : ''} `}>
        <img src={logo} alt='' className='logo'/>
        <ul className={moblieMenu ? "" : 'hide_mobile_menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li>Resources</li>
            <li>Robotics kit store</li>
            <li>Events</li>
            <li>Partner with us</li>
            <li><Link to='contact' smooth={true} offset={-260 } duration={500} className='btn'>Contact Us</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        </ul>
        <img src={menu_icon} alt='' className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default navbar