import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <Nav />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured /> 
      <Cards />
      <Footer />
    </div>
  )
}

export default App