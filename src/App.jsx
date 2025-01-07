import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Resources from './components/Resources/Resources'

const App = () => {

  const [playState, setPlayState] = useState(false)


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' Title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='TESTIMONIALS' Title='What Students Say'/>
        <Testimonial/>
        <Title subTitle='Resources' Title='Explore Resources to igniteyour STEM passion!'/>
        <Resources/>
        <Title subTitle='Contact Us' Title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/> 
    </div>
  )
}

export default App