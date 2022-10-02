import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/navbar'
import Ngowithous from '../components/Ngowithous/Ngowithous'
import Ourmission from '../components/Ourmission/Ourmission'
import Slider from '../components/Slider/Slider'

function Home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Ourmission/>
        <Ngowithous/>
        <Footer/>
    </div>
  )
}

export default Home