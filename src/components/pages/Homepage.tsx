import React from 'react'
import NavBar from '../nav/NavBar'
import Banner from '../ui/Banner'
import CountdownTimer from '../ui/CountdownTimer'
import PastEventsGallery from '../ui/PastEventsGallery'
import Agenda from '../ui/Agenda'
import SponsorCTA from '../ui/SponsorCTA'
import FAQ from '../ui/FAQ'
import AttendeeCardGenerator from '../ui/AttendeeCardGenerator'
import Footer from '../ui/Footer'
import Gif from '../ui/Gif'


import Image from 'next/image'

const Homepage = () => {
  return (
    <main className=''>


      {/* <Banner /> */}


      {/* <NavBar /> */}
      <Banner />

      <CountdownTimer />






      <PastEventsGallery />

      <Agenda />



      <SponsorCTA />



      {/* <AttendeeCardGenerator /> */}

      <Gif />

      <FAQ />

      <Footer />

    </main>
  )
}

export default Homepage