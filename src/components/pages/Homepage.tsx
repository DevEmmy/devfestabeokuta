import React, { useEffect, useRef, FC } from 'react'; // Import FC (FunctionComponent)

// Your existing component imports
import Banner from '../ui/Banner';
import CountdownTimer from '../ui/CountdownTimer';
import PastEventsGallery from '../ui/PastEventsGallery';
import Agenda from '../ui/Agenda';
import SponsorCTA from '../ui/SponsorCTA';
import FAQ from '../ui/FAQ';
import AttendeeCardGenerator from '../ui/AttendeeCardGenerator'; // This is still commented out, as in your original
import Footer from '../ui/Footer';
import Gif from '../ui/Gif';
import Speaker from '../ui/Speaker';


const Homepage: FC = () => {

  return (
    <main className=' overflow-hidden'>
      <Banner />
      <CountdownTimer />
      <PastEventsGallery />
      <Agenda />
      <Speaker />
      <SponsorCTA />
      {/* <AttendeeCardGenerator /> */}
      <Gif />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Homepage;