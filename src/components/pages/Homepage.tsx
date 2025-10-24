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

const Homepage = () => {
  return (
    <main>
        <NavBar />

        <Banner />

        <CountdownTimer />

        <PastEventsGallery />

        <Agenda />

        <SponsorCTA />

        <FAQ />

        {/* <AttendeeCardGenerator /> */}

        <Gif />

        <Footer />

    </main>
  )
}

export default Homepage