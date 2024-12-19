import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' Title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='TESTIMONIALS' Title='What Students Say'/>
        <Testimonial/>
        <Title subTitle='Contact Us' Title='Get In Touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App