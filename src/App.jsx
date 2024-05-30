import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Videoplayer from './components/videoplayer/Videoplayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App