import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Steps from './components/Steps'
import Grid from './components/Grid'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroBanner/>
      <Steps/>
      <Grid/>
      <Footer/>
    </div>
  )
}

export default App